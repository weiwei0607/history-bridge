import { getRichGraph } from './graph';

export function findShortestPath(fromId, toId) {
  if (fromId === toId) return { path: [fromId], connections: [] };

  const graph = getRichGraph();
  const visited = new Set([fromId]);
  const queue = [fromId];
  let head = 0;
  const parent = new Map();

  while (head < queue.length) {
    const id = queue[head++];
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
