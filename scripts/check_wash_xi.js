import { findShortestPath } from './src/utils/bfs.js';
const path = findShortestPath('washington', 'xi_jinping');
if (path) console.log("Path:", path.path.join(' -> '));
else console.log("FAIL");
