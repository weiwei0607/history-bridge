import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve current directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Import data dynamically so we parse actual live code
async function loadData() {
  const figuresModule = await import(`file://${path.join(rootDir, 'src/data/figures.js')}`);
  const connectionsModule = await import(`file://${path.join(rootDir, 'src/data/connections.js')}`);
  
  return {
    FIGURES: figuresModule.FIGURES,
    CONNECTIONS: connectionsModule.CONNECTIONS
  };
}

async function verify() {
  console.log("Loading graph data...");
  const { FIGURES, CONNECTIONS } = await loadData();
  
  const allIds = Object.keys(FIGURES);
  console.log(`Total Figures: ${allIds.length}`);
  console.log(`Total Connections: ${CONNECTIONS.length}`);

  const adj = {};
  allIds.forEach(id => adj[id] = new Set());
  
  const missingNodes = new Set();
  let brokenEdgesCount = 0;

  CONNECTIONS.forEach(c => {
    let broken = false;
    if (!adj[c.from]) { missingNodes.add(c.from); broken = true; }
    if (!adj[c.to]) { missingNodes.add(c.to); broken = true; }
    
    if (broken) {
      brokenEdgesCount++;
    } else {
      adj[c.from].add(c.to);
      adj[c.to].add(c.from);
    }
  });

  if (missingNodes.size > 0) {
    console.log(`\n⚠️ Found ${missingNodes.size} Missing Node IDs referenced in Connections!`);
    console.log(Array.from(missingNodes).slice(0, 10).join(', ') + "...");
  } else {
    console.log(`\n✅ No broken missing nodes in connections.`);
  }

  // BFS to find components
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

  components.sort((a, b) => b.length - a.length);
  
  console.log(`\n=== Graph Analysis ===`);
  console.log(`Total Components: ${components.length}`);
  
  console.log(`\nTop 3 components:`);
  components.slice(0, 3).forEach((c, idx) => {
    console.log(`Component ${idx+1} Size: ${c.length} nodes`);
  });

  const exactIslands = components.filter(c => c.length === 1).map(c => c[0]);
  console.log(`\nTotal Complete Islands (Size 1): ${exactIslands.length}`);
  if (exactIslands.length > 0) {
    // Show some temporary ids if they exist, specifically person_XXX
    const personIds = exactIslands.filter(id => id.startsWith('person_'));
    const realIds = exactIslands.filter(id => !id.startsWith('person_'));
    console.log(` - 'person_XXX' placeholder format: ${personIds.length}`);
    console.log(` - Standard format: ${realIds.length} -> e.g. ${realIds.slice(0, 5).join(', ')}`);
  }
}

verify().catch(console.error);
