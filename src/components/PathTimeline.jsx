import { FIGURES } from '../data/figures';
import { yearLabel, yearShort } from '../utils/format';

function regionEmoji(region) {
  if (!region) return '📜';
  if (region === 'China') return '🐉';
  if (region === 'Rome' || region === 'Greece') return '🏛️';
  if (region === 'Europe') return '⚔️';
  if (region === 'Mongol') return '🏹';
  return '🌍';
}

export default function PathTimeline({ path, connections, onSelectFigure }) {
  if (!path || path.length === 0) return null;

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-up">
      {/* Hop count badge */}
      <div className="text-center mb-8">
        <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-sm font-sans tracking-wide border border-amber-300">
          {connections.length === 0
            ? '同一人物'
            : `最短連線：${connections.length} 步`}
        </span>
      </div>

      <div className="relative">
        {/* Vertical line */}
        {connections.length > 0 && (
          <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-amber-200" />
        )}

        {path.map((figureId, i) => {
          const figure = FIGURES[figureId];
          const conn = connections[i]; // connection AFTER this figure (undefined for last)

          return (
            <div key={figureId}>
              {/* Figure node */}
              <div className="relative flex items-start gap-4 mb-0">
                {/* Avatar circle */}
                <button
                  onClick={() => onSelectFigure(figureId)}
                  className="shrink-0 w-16 h-16 rounded-full bg-amber-100 border-2 border-amber-400 flex flex-col items-center justify-center hover:border-amber-600 hover:bg-amber-200 transition-colors cursor-pointer z-10 relative"
                  title={figure?.name_zh}
                >
                  <span className="text-xl">{regionEmoji(figure?.region)}</span>
                </button>

                {/* Name card */}
                <button
                  onClick={() => onSelectFigure(figureId)}
                  className="flex-1 mt-1 text-left hover:opacity-80 transition-opacity"
                >
                  <p className="text-lg font-bold text-amber-900 leading-tight">{figure?.name_zh}</p>
                  <p className="text-xs text-amber-600/80 font-sans mt-0.5">
                    {figure?.era}
                    {figure?.born && (
                      <span className="ml-1 text-amber-500/60">
                        ({yearShort(figure.born)}{figure.died ? `–${yearShort(figure.died)}` : ''})
                      </span>
                    )}
                  </p>
                </button>
              </div>

              {/* Connection edge (between this figure and the next) */}
              {conn && (
                <div className="relative ml-16 pl-4 py-4 mb-0">
                  <div className="bg-white/70 border border-amber-200 rounded-xl p-4 shadow-sm">
                    {/* Year */}
                    <p className="text-xs font-sans text-amber-500 tracking-widest uppercase mb-1">
                      {yearLabel(conn.year)}
                    </p>
                    {/* Description */}
                    <p className="text-sm text-amber-900 leading-relaxed mb-2">
                      {conn.desc_zh}
                    </p>
                    {/* Source */}
                    <div className="flex items-start gap-1.5">
                      <span className="text-amber-400 text-xs mt-0.5">📖</span>
                      <p className="text-xs text-amber-600/80 font-sans">
                        {conn.source_zh}
                        {conn.source_en && (
                          <span className="ml-1 italic text-amber-500/60">({conn.source_en})</span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
