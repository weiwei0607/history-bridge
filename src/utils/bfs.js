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

/**
 * BFS shortest path between two figure IDs.
 * Returns { path: string[], connections: Connection[] } or null if unreachable.
 * path[0] = fromId, path[path.length-1] = toId
 * connections[i] is the edge between path[i] and path[i+1]
 */
export function findShortestPath(fromId, toId) {
  if (fromId === toId) return { path: [fromId], connections: [] };

  const graph = buildGraph();
  const visited = new Set([fromId]);
  const queue = [{ id: fromId, path: [fromId], connections: [] }];

  while (queue.length > 0) {
    const { id, path, connections } = queue.shift();
    const neighbors = graph[id] || [];

    for (const { neighbor, connection } of neighbors) {
      if (neighbor === toId) {
        return {
          path: [...path, neighbor],
          connections: [...connections, connection],
        };
      }
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push({
          id: neighbor,
          path: [...path, neighbor],
          connections: [...connections, connection],
        });
      }
    }
  }
  return null;
}
