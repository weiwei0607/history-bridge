import { CONNECTIONS } from '../data/connections';
import { FIGURES } from '../data/figures';

let _cached = null;
let _computePromise = null;

function compute() {
  const nodes = Object.keys(FIGURES);
  const n = nodes.length;

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
    let head = 0;

    while (head < queue.length) {
      const v = queue[head++];
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

  // Undirected graph: max pairs = (n-1)*(n-2)/2
  const maxPairs = (n - 1) * (n - 2) / 2;
  const map = new Map();
  for (const id of nodes) {
    map.set(id, maxPairs > 0 ? cb[id] / maxPairs : 0);
  }
  return map;
}

/**
 * Brandes algorithm — unweighted betweenness centrality (undirected).
 * Returns a Promise<Map<figureId, score>> normalized to [0, 1].
 * Result is cached after first call.
 */
export function getBetweennessCentrality() {
  if (_cached) return Promise.resolve(_cached);
  if (_computePromise) return _computePromise;
  _computePromise = new Promise(resolve => {
    setTimeout(() => {
      _cached = compute();
      resolve(_cached);
    }, 0);
  });
  return _computePromise;
}

/**
 * Returns top-N figures sorted by betweenness centrality (descending).
 * Returns a Promise.
 */
export async function getTopHubs(n = 20) {
  const scores = await getBetweennessCentrality();
  return [...scores.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([id, score]) => ({ id, score }));
}
