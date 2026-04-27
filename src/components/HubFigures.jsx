import { useMemo } from 'react';
import { getTopHubs } from '../utils/centrality';
import { FIGURES } from '../data/figures';

const ERA_COLOR = {
  '先秦': 'bg-stone-100 text-stone-700 border-stone-300',
  '秦漢': 'bg-red-50 text-red-700 border-red-200',
  '三國': 'bg-orange-50 text-orange-700 border-orange-200',
  '魏晉南北朝': 'bg-yellow-50 text-yellow-700 border-yellow-200',
  '隋唐': 'bg-amber-50 text-amber-700 border-amber-200',
  '五代十國': 'bg-lime-50 text-lime-700 border-lime-200',
  '宋': 'bg-green-50 text-green-700 border-green-200',
  '北宋': 'bg-green-50 text-green-700 border-green-200',
  '南宋': 'bg-teal-50 text-teal-700 border-teal-200',
  '遼': 'bg-cyan-50 text-cyan-700 border-cyan-200',
  '金': 'bg-sky-50 text-sky-700 border-sky-200',
  '元': 'bg-blue-50 text-blue-700 border-blue-200',
  '明': 'bg-indigo-50 text-indigo-700 border-indigo-200',
  '清': 'bg-violet-50 text-violet-700 border-violet-200',
  '清朝': 'bg-violet-50 text-violet-700 border-violet-200',
  '民國': 'bg-purple-50 text-purple-700 border-purple-200',
  '20世紀': 'bg-pink-50 text-pink-700 border-pink-200',
};

function getEraColor(era) {
  if (!era) return 'bg-gray-50 text-gray-600 border-gray-200';
  for (const [key, cls] of Object.entries(ERA_COLOR)) {
    if (era.includes(key)) return cls;
  }
  return 'bg-gray-50 text-gray-600 border-gray-200';
}

function scoreBar(score) {
  // score is normalized [0,1]; top hubs are around 0.45–0.48
  // map to visual width: treat 0.5 as 100%
  const pct = Math.min(100, Math.round(score * 200));
  return pct;
}

export default function HubFigures({ onSelectFigure, onUseInSearch }) {
  const hubs = useMemo(() => getTopHubs(15), []);

  return (
    <section className="w-full max-w-2xl mx-auto mt-12 px-2">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">🌐</span>
        <h2 className="text-base font-bold text-amber-900 tracking-wide">歷史樞紐人物</h2>
        <span className="text-xs text-amber-600/60 font-sans">— 連結最多歷史人物的關鍵橋梁</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {hubs.map(({ id, score }, idx) => {
          const fig = FIGURES[id];
          if (!fig) return null;
          const barWidth = scoreBar(score);
          const eraColor = getEraColor(fig.era);

          return (
            <button
              key={id}
              onClick={() => onUseInSearch(id)}
              className="relative flex items-center gap-3 p-3 bg-white/70 border border-amber-200 rounded-xl hover:border-amber-400 hover:bg-amber-50/60 transition-all text-left group overflow-hidden"
              title={`點擊帶入搜尋：${fig.name_zh}`}
            >
              {/* Score bar background */}
              <div
                className="absolute inset-0 bg-amber-50/50 rounded-xl transition-all"
                style={{ width: `${barWidth}%` }}
              />

              {/* Rank */}
              <span className="relative shrink-0 w-6 text-center text-xs font-bold text-amber-400 font-sans">
                {idx + 1}
              </span>

              {/* Name & era */}
              <div className="relative flex-1 min-w-0">
                <p className="font-bold text-amber-900 text-sm truncate">{fig.name_zh}</p>
                <p className="text-xs text-amber-600/70 font-sans truncate">{fig.name_en}</p>
              </div>

              {/* Era badge */}
              <span className={`relative shrink-0 text-xs px-2 py-0.5 rounded-full border font-sans ${eraColor}`}>
                {fig.era?.split('（')[0] ?? ''}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-3 text-center text-xs text-amber-600/40 font-sans">
        依「介數中心性」排列，數值越高代表此人是連結不同時代的關鍵橋梁
      </p>
    </section>
  );
}
