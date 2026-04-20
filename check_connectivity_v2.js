import fs from 'fs';

const figuresContent = fs.readFileSync('./src/data/figures.js', 'utf8');
const connectionsContent = fs.readFileSync('./src/data/connections.js', 'utf8');

const figureIds = [...figuresContent.matchAll(/id:\s*'([^']+)'/g)].map(m => m[1]);
const connections = [...connectionsContent.matchAll(/from:\s*'([^']+)',\s*to:\s*'([^']+)'/g)].map(m => [m[1], m[2]]);

const adj = {};
figureIds.forEach(id => adj[id] = []);
connections.forEach(([u, v]) => {
  if (adj[u] && adj[v]) {
    adj[u].push(v);
    adj[v].push(u);
  }
});

const visitedGlobal = new Set();
const components = [];
for (const id of figureIds) {
    if (!visitedGlobal.has(id)) {
        const comp = [];
        const q = [id];
        visitedGlobal.add(id);
        while (q.length > 0) {
            const curr = q.shift();
            comp.push(curr);
            for (const neighbor of adj[curr]) {
                if (!visitedGlobal.has(neighbor)) {
                    visitedGlobal.add(neighbor);
                    q.push(neighbor);
                }
            }
        }
        components.push(comp);
    }
}

console.log(`Total Figures: ${figureIds.length}`);
console.log(`Total Components: ${components.length}`);

components.sort((a,b) => b.length - a.length);
components.forEach((c, i) => {
    if (i < 15 || c.length > 1) {
        console.log(`Comp ${i+1} (Size: ${c.length}): ${c.slice(0, 10).join(', ')}...`);
    }
});
