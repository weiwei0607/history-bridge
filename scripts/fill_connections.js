import fs from 'fs';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import { FIGURES } from './src/data/figures.js';
import { CONNECTIONS } from './src/data/connections.js';

const ai = new GoogleGenAI({ apiKey: "process.env.GEMINI_API_KEY" });

async function run() {
  const allIds = Object.keys(FIGURES);
  const adj = {};
  allIds.forEach(id => adj[id] = []);
  
  CONNECTIONS.forEach(c => {
    if (!adj[c.from]) adj[c.from] = [];
    if (!adj[c.to]) adj[c.to] = [];
    adj[c.from].push(c.to);
    adj[c.to].push(c.from);
  });

  const visited = new Set();
  const components = [];
  for (const id of allIds) {
    if (!visited.has(id)) {
      const comp = [];
      const q = [id];
      visited.add(id);
      while(q.length > 0) {
        const curr = q.shift();
        comp.push(curr);
        for (const n of adj[curr] || []) {
          if (!visited.has(n)) {
            visited.add(n);
            q.push(n);
          }
        }
      }
      components.push(comp);
    }
  }

  components.sort((a,b) => b.length - a.length);
  const mainGraph = new Set(components[0]);
  const islands = components.slice(1).map(c => c[0]); // 取每個孤島的代表人物

  console.log(`找到 ${islands.length} 個孤島需要連接...`);

  const newConnections = [];
  
  // 為了節省時間，我們批次處理前 30 個孤島
  const batch = islands.slice(0, 30);
  
  for (const islandId of batch) {
    const islandFigure = FIGURES[islandId];
    console.log(`正在為 ${islandFigure.name_zh} (${islandId}) 尋找歷史連線...`);
    
    const prompt = `
我有一個歷史人物資料庫，裡面有幾百位歷史人物。
目前 "${islandFigure.name_zh}" (ID: ${islandId}, 時代: ${islandFigure.era}) 是一個沒有連線的孤島。
請幫我找出這位人物與【任何一位世界上知名的歷史人物】之間的「真實歷史接觸」(見過面、寫過信、師生、政敵等)。
如果他與資料庫中的其他孤島人物有接觸，也可以。

請輸出一個 JSON 陣列，包含 1 到 2 個連線物件，格式如下：
[
  {
    "id": "c_auto_${Math.random().toString(36).substr(2,6)}",
    "from": "${islandId}",
    "to": "與他有接觸的另一位人物的ID (例如 li_bai, einstein, socrates... 盡量使用英文小寫加底線)",
    "year": 發生接觸的年份 (數字),
    "type": "teacher_student | political | military | diplomatic | friendship | romantic | colleague | meet",
    "desc_zh": "中文描述他們如何接觸，1-2句話",
    "source_zh": "史料來源",
    "source_en": "Source in English"
  }
]
注意：回傳純 JSON 字串，不要有 markdown 標記。
若你想連線的對象不在既有清單，請自行發明一個合理的英文ID (例如 thutmose_iii)。
`;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });
      let text = response.text.replace(/\`\`\`json/g, '').replace(/\`\`\`/g, '').trim();
      const parsed = JSON.parse(text);
      newConnections.push(...parsed);
      console.log(`成功找到 ${parsed.length} 條連線！`);
    } catch (e) {
      console.log(`失敗: ${e.message}`);
    }
  }

  // 將新的連線寫入 connections.js
  if (newConnections.length > 0) {
    const file = path.join(process.cwd(), 'src/data/connections.js');
    let content = fs.readFileSync(file, 'utf-8');
    
    // 移除最後的 ];
    content = content.replace(/\];\s*$/, '');
    
    // 加上新的連線
    let appendStr = '';
    newConnections.forEach(c => {
      appendStr += `  { id: '${c.id}', from: '${c.from}', to: '${c.to}', year: ${c.year}, type: '${c.type}',\n    desc_zh: '${c.desc_zh}',\n    source_zh: '${c.source_zh}', source_en: '${c.source_en}' },\n`;
    });
    appendStr += '\n];\n';
    
    fs.writeFileSync(file, content + appendStr);
    console.log(`成功將 ${newConnections.length} 條新連線寫入 connections.js！`);
  }
}

run();