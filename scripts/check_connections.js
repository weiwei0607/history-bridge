import { FIGURES } from './src/data/figures.js';
import { CONNECTIONS } from './src/data/connections.js';

const allFigureIds = Object.keys(FIGURES);

// 建立圖 (Adjacency List)
const adj = {};
for (const id of allFigureIds) {
  adj[id] = [];
}

for (const conn of CONNECTIONS) {
  const { from, to } = conn;
  if (!adj[from]) adj[from] = [];
  if (!adj[to]) adj[to] = [];
  adj[from].push(to);
  adj[to].push(from);
}

// 尋找所有的連通分量 (Connected Components)
const visited = new Set();
const components = [];

for (const id of allFigureIds) {
  if (!visited.has(id)) {
    const comp = [];
    const queue = [id];
    visited.add(id);
    
    while (queue.length > 0) {
      const curr = queue.shift();
      comp.push(curr);
      
      for (const neighbor of adj[curr] || []) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    components.push(comp);
  }
}

// 依照組件大小排序
components.sort((a, b) => b.length - a.length);

if (components.length === 1) {
  console.log("✅ 檢查通過！所有的歷史人物都互相連通，沒有斷掉的橋樑！");
  console.log(`總人數: ${allFigureIds.length}，連線數: ${CONNECTIONS.length}`);
} else {
  console.log(`⚠️ 發現沒有接好的橋樑！總共被分成了 ${components.length} 個孤島群組。`);
  console.log(`最大的群組有 ${components[0].length} 人。`);
  
  for (let i = 1; i < components.length; i++) {
    console.log(`\n🏝️ 孤島群組 ${i} (${components[i].length} 人):`);
    components[i].forEach(id => {
      console.log(`  - ${FIGURES[id]?.name_zh} (${id})`);
    });
  }
}
