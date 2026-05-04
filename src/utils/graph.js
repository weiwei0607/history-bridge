import { FIGURES } from '../data/figures';
import { CONNECTIONS } from '../data/connections';

let _simpleGraph = null;
let _richGraph = null;

// Simple adjacency list for game logic: { id: [neighborId, ...] }
export function getSimpleGraph() {
  if (_simpleGraph) return _simpleGraph;
  _simpleGraph = {};
  Object.keys(FIGURES).forEach(id => (_simpleGraph[id] = []));
  CONNECTIONS.forEach(conn => {
    if (_simpleGraph[conn.from] !== undefined && _simpleGraph[conn.to] !== undefined) {
      _simpleGraph[conn.from].push(conn.to);
      _simpleGraph[conn.to].push(conn.from);
    }
  });
  return _simpleGraph;
}

// Rich adjacency list for BFS: { id: [{ neighbor, connection }, ...] }
export function getRichGraph() {
  if (_richGraph) return _richGraph;
  _richGraph = {};
  CONNECTIONS.forEach(conn => {
    if (!_richGraph[conn.from]) _richGraph[conn.from] = [];
    if (!_richGraph[conn.to])   _richGraph[conn.to]   = [];
    _richGraph[conn.from].push({ neighbor: conn.to,   connection: conn });
    _richGraph[conn.to].push(  { neighbor: conn.from, connection: conn });
  });
  return _richGraph;
}
