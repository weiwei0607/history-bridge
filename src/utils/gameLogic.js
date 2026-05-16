import { FIGURES } from '../data/figures';
import { CONNECTIONS_BY_ID } from '../data/connections';
import { getSimpleGraph } from './graph';

const MAX_TRIES = 300;

export function generateQuestion(depth = 0) {
  if (depth > 10) {
    console.error('generateQuestion: 超過重試上限，資料圖可能過於稀疏');
    return null;
  }

  const graph = getSimpleGraph();
  const allFigureIds = Object.keys(FIGURES);

  // 1. 隨機選一個中心節點 B（答案），且 B 至少要有兩個以上的連線
  let centerId, neighbors, tries = 0;
  do {
    if (tries++ > MAX_TRIES) return generateQuestion(depth + 1);
    centerId = allFigureIds[Math.floor(Math.random() * allFigureIds.length)];
    neighbors = graph[centerId];
  } while (!neighbors || neighbors.length < 2);

  // 2. 從 B 的鄰居中隨機挑選兩個 A 和 C（題目），確保 A !== C
  let idA, idC;
  tries = 0;
  do {
    if (tries++ > MAX_TRIES) return generateQuestion(depth + 1);
    idA = neighbors[Math.floor(Math.random() * neighbors.length)];
    idC = neighbors[Math.floor(Math.random() * neighbors.length)];
  } while (idA === idC);

  // 3. 找出為什麼 A 和 C 會連到 B 的故事（O(degree) index lookup，比全掃描快）
  const centerConns = CONNECTIONS_BY_ID.get(centerId) ?? [];
  const connA = centerConns.find(c => c.from === idA || c.to === idA) ?? null;
  const connC = centerConns.find(c => c.from === idC || c.to === idC) ?? null;

  const desc = `${FIGURES[idA].name_zh} 與 ${FIGURES[centerId].name_zh}：${connA ? connA.desc_zh : '史實交集'}\n\n${FIGURES[idC].name_zh} 與 ${FIGURES[centerId].name_zh}：${connC ? connC.desc_zh : '史實交集'}`;

  // 4. 產生 3 個錯誤選項
  // 預先建立 Set，使 isActuallyCorrect 判斷從 O(neighbors) 降至 O(1)
  const neighborSetA = new Set(graph[idA] || []);
  const neighborSetC = new Set(graph[idC] || []);

  const wrongOptions = new Set();
  tries = 0;
  while (wrongOptions.size < 3) {
    if (tries++ > MAX_TRIES) return generateQuestion(depth + 1);
    const wrongId = allFigureIds[Math.floor(Math.random() * allFigureIds.length)];
    const isActuallyCorrect = neighborSetA.has(wrongId) && neighborSetC.has(wrongId);
    if (wrongId !== centerId && wrongId !== idA && wrongId !== idC && !isActuallyCorrect) {
      wrongOptions.add(wrongId);
    }
  }

  // 5. 組合選項並以 Fisher-Yates 洗牌（無偏）
  const options = [centerId, ...Array.from(wrongOptions)];
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }

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
