// 每條連線都必須是有史料記載的真實接觸
// type: teacher_student | political | military | diplomatic | friendship | romantic | colleague
//
// 資料拆分為三個子檔（依年代），此檔為聚合入口：
//   connections_ancient.js  — 上古至三國 (year < 220)
//   connections_medieval.js — 中古 (220 ≤ year < 1400)
//   connections_modern.js   — 近代 (year ≥ 1400)

import { CONNECTIONS_ANCIENT } from './connections_ancient.js';
import { CONNECTIONS_MEDIEVAL } from './connections_medieval.js';
import { CONNECTIONS_MODERN } from './connections_modern.js';
import { CONNECTIONS_EXTRA } from './connections_extra.js';

export const CONNECTIONS = [
  ...CONNECTIONS_ANCIENT,
  ...CONNECTIONS_MEDIEVAL,
  ...CONNECTIONS_MODERN,
  ...CONNECTIONS_EXTRA,
];

// Pre-index connections by figure ID for O(1) lookups (avoids O(n) filter on every modal open)
export const CONNECTIONS_BY_ID = (() => {
  const map = new Map();
  for (const conn of CONNECTIONS) {
    if (!map.has(conn.from)) map.set(conn.from, []);
    if (!map.has(conn.to))   map.set(conn.to,   []);
    map.get(conn.from).push(conn);
    map.get(conn.to).push(conn);
  }
  return map;
})();
