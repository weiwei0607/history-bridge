import fs from 'fs';

// Read figures
const figFile = fs.readFileSync('./src/data/figures.js', 'utf8');
const figureIds = [...figFile.matchAll(/id:\s*'([^']+)'/g)].map(m => m[1]);

// Read connections
const connFile = fs.readFileSync('./src/data/connections.js', 'utf8');
const connections = [...connFile.matchAll(/from:\s*'([^']+)',\s*to:\s*'([^']+)'/g)].map(m => [m[1], m[2]]);

const adj = {};
figureIds.forEach(id => adj[id] = new Set());
connections.forEach(([u, v]) => {
  if (adj[u] && adj[v]) {
    adj[u].add(v);
    adj[v].add(u);
  } else {
    // Check if IDs exist but didn't match the regex perfectly
    if (!adj[u]) console.warn(`Missing figure in adj: ${u}`);
    if (!adj[v]) console.warn(`Missing figure in adj: ${v}`);
  }
});

const visited = new Set();
const components = [];

for (const id of figureIds) {
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

console.log(`Figures in Figures.js: ${figureIds.length}`);
console.log(`Unique figure IDs: ${new Set(figureIds).size}`);
console.log(`Total Components: ${components.length}`);

components.sort((a,b) => b.length - a.length);
components.slice(0, 5).forEach((c, i) => {
  console.log(`Component ${i+1} (Size: ${c.length}): ${c.slice(0, 10).join(', ')}...`);
});

if (components.length > 1) {
  console.log("\nDisconnected figures example:");
  console.log(components[1].slice(0, 10).join(', '));
}
