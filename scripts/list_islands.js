import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function listIslands() {
  const figuresModule = await import(`file://${path.join(rootDir, 'src/data/figures.js')}`);
  const connectionsModule = await import(`file://${path.join(rootDir, 'src/data/connections.js')}`);

  const FIGURES = figuresModule.FIGURES;
  const CONNECTIONS = connectionsModule.CONNECTIONS;
  const allIds = Object.keys(FIGURES);

  const adj = {};
  allIds.forEach(id => adj[id] = new Set());

  CONNECTIONS.forEach(c => {
    if (adj[c.from] && adj[c.to]) {
      adj[c.from].add(c.to);
      adj[c.to].add(c.from);
    }
  });

  const visited = new Set();
  const components = [];

  for (const id of allIds) {
    if (!visited.has(id)) {
      const comp = [];
      const q = [id];
      visited.add(id);
      while (q.length > 0) {
        const curr = q.shift();
        comp.push(curr);
        for (const neighbor of adj[curr]) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            q.push(neighbor);
          }
        }
      }
      components.push(comp);
    }
  }

  const islands = components.filter(c => c.length === 1).map(c => c[0]);
  const pairs = components.filter(c => c.length === 2);
  const triples = components.filter(c => c.length >= 3 && c.length < 474);

  console.log(`\n=== 孤島人物列表 (共 ${islands.length} 位) ===\n`);
  islands.forEach(id => {
    const fig = FIGURES[id];
    console.log(`  ${id} -> ${fig ? fig.name : '???'} [${fig ? fig.era : ''}]`);
  });

  console.log(`\n=== 小型連通組 (2人組: ${pairs.length} 組) ===\n`);
  pairs.forEach(comp => {
    comp.forEach(id => {
      const fig = FIGURES[id];
      console.log(`  ${id} -> ${fig ? fig.name : '???'}`);
    });
    console.log('  ---');
  });

  if (triples.length > 0) {
    console.log(`\n=== 中型游離島 (3-10人組: ${triples.length} 組) ===\n`);
    triples.forEach(comp => {
      console.log(`  [${comp.length}人] ${comp.map(id => FIGURES[id]?.name || id).join(', ')}`);
    });
  }
}

listIslands().catch(console.error);
