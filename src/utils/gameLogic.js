import { FIGURES } from '../data/figures';
import { CONNECTIONS } from '../data/connections';

// 建立鄰接矩陣 (Adjacency List)
function buildGraph() {
  const graph = {};
  Object.keys(FIGURES).forEach(id => graph[id] = []);
  CONNECTIONS.forEach(conn => {
    if (graph[conn.from] && graph[conn.to]) {
      graph[conn.from].push(conn.to);
      graph[conn.to].push(conn.from);
    }
  });
  return graph;
}

const graph = buildGraph();
const allFigureIds = Object.keys(FIGURES);

/**
 * 產生一個「距離剛好是 2」的題目（即 A - B - C）
 * @returns { question: {from, to, answer, options, desc} }
 */
export function generateQuestion() {
  // 1. 隨機選一個中心節點 B (答案)，且 B 至少要有兩個以上的連線
  let centerId;
  let neighbors;
  while (true) {
    centerId = allFigureIds[Math.floor(Math.random() * allFigureIds.length)];
    neighbors = graph[centerId];
    if (neighbors && neighbors.length >= 2) break;
  }

  // 2. 從 B 的鄰居中隨機挑選兩個 A 和 C (題目)，確保 A !== C
  let idA, idC;
  while (true) {
    idA = neighbors[Math.floor(Math.random() * neighbors.length)];
    idC = neighbors[Math.floor(Math.random() * neighbors.length)];
    if (idA !== idC) break;
  }

  // 3. 找出為什麼 A 和 C 會連到 B 的故事 (從 CONNECTIONS 裡找)
  const connA = CONNECTIONS.find(c => 
    (c.from === idA && c.to === centerId) || (c.to === idA && c.from === centerId)
  );
  const connC = CONNECTIONS.find(c => 
    (c.from === idC && c.to === centerId) || (c.to === idC && c.from === centerId)
  );

  const desc = `${FIGURES[idA].name_zh} 與 ${FIGURES[centerId].name_zh}：${connA ? connA.desc_zh : '史實交集'}\n\n${FIGURES[idC].name_zh} 與 ${FIGURES[centerId].name_zh}：${connC ? connC.desc_zh : '史實交集'}`;

  // 4. 產生 3 個錯誤選項 (從全部人物中挑選)
  // 必須確保：1. 不是答案 B, 2. 不是 A 或 C, 3. 他不能同時連向 A 和 C（否則他也是正確答案）
  const wrongOptions = new Set();
  while (wrongOptions.size < 3) {
    const wrongId = allFigureIds[Math.floor(Math.random() * allFigureIds.length)];
    const isActuallyCorrect = graph[wrongId]?.includes(idA) && graph[wrongId]?.includes(idC);
    
    if (wrongId !== centerId && 
        wrongId !== idA && 
        wrongId !== idC && 
        !isActuallyCorrect) {
      wrongOptions.add(wrongId);
    }
  }

  // 5. 組合選項並打亂
  const options = [centerId, ...Array.from(wrongOptions)];
  options.sort(() => Math.random() - 0.5);

  return {
    fromId: idA,
    toId: idC,
    answerId: centerId,
    options: options.map(id => ({
      id,
      name: FIGURES[id].name_zh,
      title: FIGURES[id].era + (FIGURES[id].tags[0] ? ' ' + FIGURES[id].tags[0] : '')
    })),
    desc,
  };
}
