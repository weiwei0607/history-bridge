import { CONNECTIONS } from '../data/connections';

let _cachedGraph = null;

function buildGraph() {
  if (_cachedGraph) return _cachedGraph;
  const graph = {};
  for (const conn of CONNECTIONS) {
    if (!graph[conn.from]) graph[conn.from] = [];
    if (!graph[conn.to])   graph[conn.to]   = [];
    graph[conn.from].push({ neighbor: conn.to,   connection: conn });
    graph[conn.to].push(  { neighbor: conn.from, connection: conn });
  }
  _cachedGraph = graph;
  return graph;
}

export function findShortestPath(fromId, toId) {
  if (fromId === toId) return { path: [fromId], connections: [] };

  const graph = buildGraph();
  const visited = new Set([fromId]);
  const queue = [fromId];
  // parent map: id → { parentId, connection }
  const parent = new Map();

  while (queue.length > 0) {
    const id = queue.shift();
    for (const { neighbor, connection } of (graph[id] || [])) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        parent.set(neighbor, { parentId: id, connection });
        if (neighbor === toId) {
          const path = [];
          const connections = [];
          let cur = neighbor;
          while (parent.has(cur)) {
            const { parentId, connection: conn } = parent.get(cur);
            path.unshift(cur);
            connections.unshift(conn);
            cur = parentId;
          }
          path.unshift(fromId);
          return { path, connections };
        }
        queue.push(neighbor);
      }
    }
  }
  return null;
}
