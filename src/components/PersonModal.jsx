import { useEffect, useMemo } from 'react';
import { FIGURES } from '../data/figures';
import { CONNECTIONS } from '../data/connections';
import { yearLabel, yearShort } from '../utils/format';
import { useScrollLock } from '../utils/useScrollLock';

export default function PersonModal({ figureId, onClose, onNavigate, onFindPath }) {
  const figure = figureId ? FIGURES[figureId] : null;

  const relatedConns = useMemo(() =>
    figureId ? CONNECTIONS.filter(c => c.from === figureId || c.to === figureId) : [],
    [figureId]
  );

  useScrollLock(!!figure);

  useEffect(() => {
    if (!figure) return;
    function handleKey(e) { if (e.key === 'Escape') onClose(); }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [figure, onClose]);

  if (!figure) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={figure.name_zh}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-amber-950/30 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto bg-[#fdf8f0] rounded-2xl shadow-2xl border border-amber-200 animate-fade-up no-scrollbar"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#fdf8f0]/95 backdrop-blur-sm border-b border-amber-100 px-6 pt-6 pb-4 z-10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-amber-100 text-amber-500 transition-colors text-lg focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
            aria-label="關閉"
          >
            ✕
          </button>
          <h2 className="text-3xl font-bold text-amber-900">{figure.name_zh}</h2>
          <p className="text-sm text-amber-600/80 font-sans mt-1 italic">{figure.name_en}</p>

          {/* Meta pills */}
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="px-2.5 py-0.5 bg-amber-100 text-amber-800 rounded-full text-xs font-sans border border-amber-200">
              {figure.era}
            </span>
            <span className="px-2.5 py-0.5 bg-amber-100 text-amber-800 rounded-full text-xs font-sans border border-amber-200">
              {yearLabel(figure.born)} — {yearLabel(figure.died)}
            </span>
            {figure.tags?.map(tag => (
              <span key={tag} className="px-2.5 py-0.5 bg-stone-100 text-stone-600 rounded-full text-xs font-sans border border-stone-200">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          {/* Bio */}
          <p className="text-base text-amber-900/90 leading-relaxed whitespace-pre-line">
            {figure.bio_zh}
          </p>

          {/* Connections */}
          {relatedConns.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-sans tracking-widest text-amber-600/70 uppercase mb-3">
                史載交集
              </h3>
              <ul className="space-y-3">
                {relatedConns.map(conn => {
                  const otherId = conn.from === figureId ? conn.to : conn.from;
                  const other = FIGURES[otherId];
                  return (
                    <li key={conn.id} className="bg-white/60 rounded-xl p-3 border border-amber-100">
                      <div className="flex items-center gap-2 mb-1">
                        <button
                          className="text-sm font-semibold text-amber-800 hover:text-amber-600 transition-colors hover:underline"
                          onClick={() => onNavigate(otherId)}
                        >
                          {other?.name_zh ?? otherId}
                        </button>
                        <span className="text-xs text-amber-400 font-sans">
                          {yearShort(conn.year)}
                        </span>
                        {onFindPath && (
                          <button
                            className="ml-auto text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200 border border-amber-200 transition-colors"
                            onClick={() => onFindPath(figureId, otherId)}
                          >
                            找路徑 →
                          </button>
                        )}
                      </div>
                      <p className="text-xs text-amber-700/80 leading-relaxed">{conn.desc_zh}</p>
                      <p className="text-xs text-amber-500/70 mt-1 font-sans">📖 {conn.source_zh}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
