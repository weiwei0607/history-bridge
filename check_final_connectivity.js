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

function getPath(start, end) {
    const visited = new Set([start]);
    const queue = [[start]];
    while (queue.length > 0) {
        const path = queue.shift();
        const node = path[path.length - 1];
        if (node === end) return path;
        for (const neighbor of adj[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([...path, neighbor]);
            }
        }
    }
    return null;
}

const path = getPath('washington', 'xi_jinping');
if (path) {
    console.log("SUCCESS: Path found!");
    console.log(path.join(' -> '));
} else {
    console.log("FAILURE: No path between Mozart and Kongzi.");
    // Check components
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
    console.log(`Total components: ${components.length}`);
    components.forEach((c, i) => {
        if (c.includes('mozart')) console.log(`Mozart is in Component ${i+1} (${c.length} people)`);
        if (c.includes('kongzi')) console.log(`Kongzi is in Component ${i+1} (${c.length} people)`);
    });
}
