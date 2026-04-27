import { FIGURES } from './src/data/figures.js';
import { CONNECTIONS } from './src/data/connections.js';

const allFigureIds = new Set(Object.keys(FIGURES));
const issues = [];

// ── 1. 檢查 CONNECTIONS 中的 from/to 是否都是有效的人物 ID ──
const invalidFrom = [];
const invalidTo = [];
const missingBoth = [];

for (const conn of CONNECTIONS) {
  const fromValid = allFigureIds.has(conn.from);
  const toValid = allFigureIds.has(conn.to);
  if (!fromValid && !toValid) {
    missingBoth.push({ id: conn.id, from: conn.from, to: conn.to });
  } else if (!fromValid) {
    invalidFrom.push({ id: conn.id, from: conn.from });
  } else if (!toValid) {
    invalidTo.push({ id: conn.id, to: conn.to });
  }
}

if (missingBoth.length > 0) {
  issues.push(`❌ 有 ${missingBoth.length} 條連線的 from 和 to 都不是有效人物 ID`);
  console.log('連線 from/to 皆無效:', missingBoth.slice(0, 5));
}
if (invalidFrom.length > 0) {
  issues.push(`❌ 有 ${invalidFrom.length} 條連線的 from 不是有效人物 ID`);
  console.log('連線 from 無效:', invalidFrom.slice(0, 5));
}
if (invalidTo.length > 0) {
  issues.push(`❌ 有 ${invalidTo.length} 條連線的 to 不是有效人物 ID`);
  console.log('連線 to 無效:', invalidTo.slice(0, 5));
}

// ── 2. 檢查孤兒節點（在 FIGURES 中但沒有任何連線）─ ─
const connectedIds = new Set();
for (const conn of CONNECTIONS) {
  if (allFigureIds.has(conn.from)) connectedIds.add(conn.from);
  if (allFigureIds.has(conn.to)) connectedIds.add(conn.to);
}

const orphanIds = [];
for (const id of allFigureIds) {
  if (!connectedIds.has(id)) {
    orphanIds.push(id);
  }
}

if (orphanIds.length > 0) {
  issues.push(`⚠️ 有 ${orphanIds.length} 個孤兒人物（沒有任何連線）`);
  console.log('孤兒人物:', orphanIds.slice(0, 20));
}

// ── 3. 檢查連通分量 ──
const adj = {};
for (const id of allFigureIds) adj[id] = [];
for (const conn of CONNECTIONS) {
  if (allFigureIds.has(conn.from) && allFigureIds.has(conn.to)) {
    adj[conn.from].push(conn.to);
    adj[conn.to].push(conn.from);
  }
}

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
      for (const neighbor of adj[curr]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    components.push(comp);
  }
}

components.sort((a, b) => b.length - a.length);

console.log(`\n📊 統計:`);
console.log(`   總人物數: ${allFigureIds.size}`);
console.log(`   總連線數: ${CONNECTIONS.length}`);
console.log(`   有連線的人物: ${connectedIds.size}`);
console.log(`   孤兒人物: ${orphanIds.length}`);
console.log(`   連通分量數: ${components.length}`);

if (components.length === 1) {
  console.log(`\n✅ 所有人物都在同一個連通分量中（大小: ${components[0].length}）`);
} else {
  console.log(`\n⚠️ 人物分散在 ${components.length} 個連通分量中`);
  console.log('最大的 10 個分量:');
  for (let i = 0; i < Math.min(10, components.length); i++) {
    console.log(`   Comp ${i + 1}: ${components[i].length} 人 — ${components[i].slice(0, 5).join(', ')}...`);
  }
}

// ── 4. 檢查特殊題目建議的可達性 ──
const SUGGESTIONS = [
  ['socrates', 'alexander'],
  ['zhugeliang', 'caocao'],
  ['lincoln', 'bismarck'],
  ['li_hongzhang', 'ito_hirobumi'],
  ['kublai_khan', 'marco_polo'],
  ['napoleon', 'beethoven'],
  ['li_bai', 'abe_no_nakamaro'],
  ['socrates', 'kongzi'],
  ['mozart', 'kongzi'],
];

function findPathBFS(start, end) {
  if (start === end) return { path: [start], steps: 0 };
  const queue = [[start]];
  const visited = new Set([start]);
  while (queue.length > 0) {
    const path = queue.shift();
    const node = path[path.length - 1];
    for (const neighbor of adj[node]) {
      if (neighbor === end) {
        return { path: [...path, neighbor], steps: path.length };
      }
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([...path, neighbor]);
      }
    }
  }
  return null;
}

console.log('\n🔍 檢查 SUGGESTIONS 可達性:');
for (const [a, b] of SUGGESTIONS) {
  const result = findPathBFS(a, b);
  if (result) {
    console.log(`   ✅ ${FIGURES[a]?.name_zh || a} ↔ ${FIGURES[b]?.name_zh || b}: ${result.steps} 步`);
  } else {
    console.log(`   ❌ ${FIGURES[a]?.name_zh || a} ↔ ${FIGURES[b]?.name_zh || b}: 無路徑`);
    issues.push(`❌ 建議題目「${FIGURES[a]?.name_zh || a} ↔ ${FIGURES[b]?.name_zh || b}」無法連通`);
  }
}

// ── 5. 檢查 GameMode 的 generateQuestion 可行性 ──
console.log('\n🎮 檢查 GameMode 可行性:');
const neighborCount = {};
for (const id of allFigureIds) {
  neighborCount[id] = adj[id].length;
}

const hasAtLeast2Neighbors = Object.values(neighborCount).filter(c => c >= 2).length;
console.log(`   至少有 2 個鄰居的人物: ${hasAtLeast2Neighbors} / ${allFigureIds.size}`);

if (hasAtLeast2Neighbors < 10) {
  issues.push(`⚠️ 只有 ${hasAtLeast2Neighbors} 個人物有 ≥2 連線，GameMode 可能無法生成題目`);
}

// ── 6. 檢查重複連線 ──
const connSignatures = new Set();
const duplicateConns = [];
for (const conn of CONNECTIONS) {
  const sig = [conn.from, conn.to].sort().join('|');
  if (connSignatures.has(sig)) {
    duplicateConns.push(conn);
  } else {
    connSignatures.add(sig);
  }
}

if (duplicateConns.length > 0) {
  issues.push(`⚠️ 有 ${duplicateConns.length} 條重複連線`);
  console.log('\n重複連線:', duplicateConns.slice(0, 3));
}

// ── 總結 ──
console.log('\n' + '='.repeat(50));
if (issues.length === 0) {
  console.log('✅ 所有檢查通過，未發現問題！');
} else {
  console.log(`⚠️ 發現 ${issues.length} 個問題:`);
  for (const issue of issues) {
    console.log(`   ${issue}`);
  }
}
