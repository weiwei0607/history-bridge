import { useState, useEffect, useCallback, useMemo } from 'react';
import SearchBox from './components/SearchBox';
import PathTimeline from './components/PathTimeline';
import PersonModal from './components/PersonModal';
import GameMode from './components/GameMode';
import GuessWhoMode from './components/GuessWhoMode';
import HubFigures from './components/HubFigures';
import { findShortestPath } from './utils/bfs';
import { getTopHubs } from './utils/centrality';
import { FIGURES } from './data/figures';

const TIME_PERIODS = [
  { label: '全部',  filter: null },
  { label: '上古',  sub: '~西元500前', filter: f => f.born < -500 },
  { label: '古代',  sub: '前500~500',  filter: f => f.born >= -500 && f.born < 500 },
  { label: '中古',  sub: '500~1500',   filter: f => f.born >= 500  && f.born < 1500 },
  { label: '近代',  sub: '1500~1900',  filter: f => f.born >= 1500 && f.born < 1900 },
  { label: '現代',  sub: '1900~',      filter: f => f.born >= 1900 },
];


export default function App() {
  const [figureA, setFigureA] = useState(null);
  const [figureB, setFigureB] = useState(null);
  const [result, setResult]   = useState(null);
  const [modalId, setModalId] = useState(null);
  const [showGame, setShowGame] = useState(false);
  const [showGuessWho, setShowGuessWho] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [toast, setToast] = useState(null);
  const [selectedPeriodLabel, setSelectedPeriodLabel] = useState(null);
  const selectedPeriod = useMemo(
    () => TIME_PERIODS.find(p => p.label === selectedPeriodLabel) ?? null,
    [selectedPeriodLabel]
  );

  const suggestions = useMemo(() => {
    const hubs = getTopHubs(20);
    const pairs = [];
    for (let i = 0; i < hubs.length - 1 && pairs.length < 10; i++) {
      const a = hubs[i].id;
      const b = hubs[i + 2]?.id ?? hubs[i + 1].id;
      if (a !== b && FIGURES[a] && FIGURES[b]) pairs.push([a, b]);
    }
    return pairs;
  }, []);

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }

  // Read URL query params on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const a = params.get('a');
    const b = params.get('b');
    if (!a && !b) return;
    if (a && b && FIGURES[a] && FIGURES[b]) {
      setFigureA(a);
      setFigureB(b);
      const found = findShortestPath(a, b);
      setResult(found ?? 'none');
    } else {
      showToast('分享連結中的人物不存在，已載入預設頁面');
    }
  }, []);

  function handleSearch() {
    if (!figureA || !figureB) return;
    const found = findShortestPath(figureA, figureB);
    setResult(found ?? 'none');
  }

  function handleSuggestion([a, b]) {
    setFigureA(a);
    setFigureB(b);
    const found = findShortestPath(a, b);
    setResult(found ?? 'none');
  }

  const handleRandomExplore = useCallback(() => {
    const ids = Object.keys(FIGURES);
    let a = ids[Math.floor(Math.random() * ids.length)];
    let b = ids[Math.floor(Math.random() * ids.length)];
    while (a === b) {
      b = ids[Math.floor(Math.random() * ids.length)];
    }
    setFigureA(a);
    setFigureB(b);
    const found = findShortestPath(a, b);
    setResult(found ?? 'none');
  }, []);

  const handleFindPath = useCallback((a, b) => {
    setModalId(null);
    setFigureA(a);
    setFigureB(b);
    const found = findShortestPath(a, b);
    setResult(found ?? 'none');
  }, []);

  const handleShare = useCallback(() => {
    if (!figureA || !figureB) return;
    const url = `${window.location.origin}${window.location.pathname}?a=${figureA}&b=${figureB}`;
    navigator.clipboard.writeText(url);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2000);
  }, [figureA, figureB]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="text-center pt-12 pb-8 px-4 relative">
        <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
          <button
            onClick={() => setShowGame(true)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
          >
            🕹️ 知識王挑戰
          </button>
          <button
            onClick={() => setShowGuessWho(true)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform animate-pulse"
          >
            🕵️‍♂️ 猜猜我是誰
          </button>
        </div>
        <h1 className="text-4xl font-bold text-amber-900 tracking-tight">歷史橋梁</h1>
        <p className="mt-2 text-amber-700/70 font-sans text-sm tracking-wide">
          History Bridge — 找出兩位歷史人物之間，有史可查的最短連線
        </p>
      </header>

      {/* Search panel */}
      <section className="flex flex-col items-center gap-6 px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 w-full max-w-2xl">
          <SearchBox
            label="第一位人物"
            value={figureA}
            onChange={v => { setFigureA(v); setResult(null); }}
            exclude={figureB}
            periodFilter={selectedPeriod?.filter ?? null}
          />

          {/* VS divider */}
          <div className="hidden sm:flex shrink-0 items-center justify-center w-10 h-12 text-amber-400 text-lg font-bold select-none">
            →
          </div>

          <SearchBox
            label="第二位人物"
            value={figureB}
            onChange={v => { setFigureB(v); setResult(null); }}
            exclude={figureA}
            periodFilter={selectedPeriod?.filter ?? null}
          />
        </div>

        {/* Period Filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {TIME_PERIODS.map(p => (
            <button
              key={p.label}
              onClick={() => setSelectedPeriodLabel(l => l === p.label ? null : p.label)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                selectedPeriodLabel === p.label
                  ? 'bg-amber-800 text-white'
                  : 'bg-white border border-amber-200 text-amber-700 hover:bg-amber-50'
              }`}
            >
              {p.label}{p.sub && <span className="ml-1 opacity-60 font-normal">{p.sub}</span>}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={handleSearch}
            disabled={!figureA || !figureB}
            className="px-8 py-3 bg-amber-800 text-amber-50 rounded-xl font-bold tracking-wide hover:bg-amber-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors shadow-md"
          >
            尋找最短連線
          </button>
          <button
            onClick={handleRandomExplore}
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold tracking-wide hover:scale-105 transition-transform shadow-md"
          >
            🎲 隨機探索
          </button>
          {result && result !== 'none' && (
            <button
              onClick={handleShare}
              className={`px-6 py-3 rounded-xl font-bold tracking-wide transition-all shadow-md ${shareCopied ? 'bg-green-500 text-white' : 'bg-white text-amber-800 border-2 border-amber-200 hover:border-amber-400'}`}
            >
              {shareCopied ? '✅ 已複製連結' : '🔗 分享路徑'}
            </button>
          )}
        </div>

        {/* Quick suggestions */}
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
          {suggestions.map(([a, b]) => (
            <button
              key={`${a}-${b}`}
              onClick={() => handleSuggestion([a, b])}
              className="px-3 py-1 bg-white/60 border border-amber-200 rounded-full text-xs text-amber-700 font-sans hover:bg-amber-50 hover:border-amber-400 transition-colors"
            >
              {FIGURES[a]?.name_zh} ↔ {FIGURES[b]?.name_zh}
            </button>
          ))}
        </div>
      </section>

      {/* Result */}
      <main className="flex-1 px-4 py-10">
        {result === null && (
          <>
            <p className="text-center text-amber-700/40 font-sans text-sm mt-8">
              選擇兩位人物，開始探索歷史連線
            </p>
            <HubFigures
              onSelectFigure={setModalId}
              onUseInSearch={id => {
                if (!figureA) setFigureA(id);
                else if (!figureB) setFigureB(id);
                else setFigureA(id);
              }}
            />
          </>
        )}

        {result === 'none' && (
          <div className="text-center mt-8 animate-fade-up">
            <p className="text-2xl mb-2">🔍</p>
            <p className="text-amber-800 font-bold text-lg">找不到連線</p>
            <p className="text-amber-600/70 font-sans text-sm mt-2">
              這兩位人物之間目前沒有有史可查的路徑。<br />
              可能相差太遠，或資料庫尚未收錄中間人物。
            </p>
          </div>
        )}

        {result && result !== 'none' && (
          <PathTimeline
            path={result.path}
            connections={result.connections}
            onSelectFigure={setModalId}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-xs text-amber-700/40 font-sans border-t border-amber-100">
        資料來源：史記、漢書、三國志、資治通鑑、馬可波羅遊記等史籍
      </footer>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 bg-amber-900 text-amber-50 rounded-xl shadow-xl text-sm font-sans animate-fade-up">
          {toast}
        </div>
      )}

      {/* Person detail modal */}
      <PersonModal
        figureId={modalId}
        onClose={() => setModalId(null)}
        onNavigate={id => setModalId(id)}
        onFindPath={handleFindPath}
      />

      {/* Game Mode Overlay */}
      {showGame && (
        <GameMode onClose={() => setShowGame(false)} />
      )}

      {/* Guess Who Mode Overlay */}
      {showGuessWho && (
        <GuessWhoMode onClose={() => setShowGuessWho(false)} />
      )}
    </div>
  );
}
