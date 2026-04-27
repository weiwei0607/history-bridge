import { CONNECTIONS } from '../data/connections';
import { FIGURES } from '../data/figures';

let _cached = null;

/**
 * Brandes algorithm — unweighted betweenness centrality.
 * Returns a Map<figureId, score> normalized to [0, 1].
 */
export function getBetweennessCentrality() {
  if (_cached) return _cached;

  const nodes = Object.keys(FIGURES);
  const n = nodes.length;

  // Build adjacency list (undirected)
  const adj = {};
  for (const id of nodes) adj[id] = [];
  for (const c of CONNECTIONS) {
    if (FIGURES[c.from] && FIGURES[c.to]) {
      adj[c.from].push(c.to);
      adj[c.to].push(c.from);
    }
  }

  const cb = {};
  for (const id of nodes) cb[id] = 0;

  for (const s of nodes) {
    const stack = [];
    const pred = {};
    const sigma = {};
    const dist = {};
    const delta = {};

    for (const id of nodes) {
      pred[id] = [];
      sigma[id] = 0;
      dist[id] = -1;
      delta[id] = 0;
    }

    sigma[s] = 1;
    dist[s] = 0;
    const queue = [s];

    while (queue.length) {
      const v = queue.shift();
      stack.push(v);
      for (const w of adj[v]) {
        if (dist[w] < 0) {
          queue.push(w);
          dist[w] = dist[v] + 1;
        }
        if (dist[w] === dist[v] + 1) {
          sigma[w] += sigma[v];
          pred[w].push(v);
        }
      }
    }

    while (stack.length) {
      const w = stack.pop();
      for (const v of pred[w]) {
        delta[v] += (sigma[v] / sigma[w]) * (1 + delta[w]);
      }
      if (w !== s) cb[w] += delta[w];
    }
  }

  // Normalize: max possible pairs = (n-1)*(n-2)
  const maxPairs = (n - 1) * (n - 2);
  const map = new Map();
  for (const id of nodes) {
    map.set(id, maxPairs > 0 ? cb[id] / maxPairs : 0);
  }

  _cached = map;
  return map;
}

/**
 * Returns top-N figures sorted by betweenness centrality (descending).
 */
export function getTopHubs(n = 20) {
  const scores = getBetweennessCentrality();
  return [...scores.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([id, score]) => ({ id, score }));
}
