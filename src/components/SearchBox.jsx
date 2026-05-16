import { useState, useRef, useEffect, useMemo } from 'react';
import { FIGURES } from '../data/figures';

const ALL_FIGURES = Object.values(FIGURES);

function highlight(text, query) {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-amber-200 text-inherit">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
}

export default function SearchBox({ label, value, onChange, exclude, periodFilter }) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const ref = useRef(null);
  const listRef = useRef(null);

  const selected = value ? FIGURES[value] : null;

  // Derive the display value rather than syncing it with an effect
  const displayValue = open ? query : (selected ? selected.name_zh : '');

  const filtered = useMemo(() => {
    if (!open) return [];
    const q = query.toLowerCase().trim();
    if (!q) return ALL_FIGURES.filter(f => f.id !== exclude && (!periodFilter || periodFilter(f))).slice(0, 15);

    return ALL_FIGURES.filter(f => {
      if (f.id === exclude) return false;
      if (periodFilter && !periodFilter(f)) return false;
      const name_zh = f.name_zh || '';
      const name_en = f.name_en || '';
      const era = f.era || '';
      const aliases = f.aliases || [];
      const searchable = [
        name_zh,
        name_en,
        era,
        ...aliases
      ].join(' ').toLowerCase();
      return searchable.includes(q);
    }).slice(0, 15);
  }, [query, open, exclude, periodFilter]);

  // Reset active index when options change
  useEffect(() => { setActiveIndex(-1); }, [filtered]);

  // Scroll active item into view
  useEffect(() => {
    if (activeIndex < 0 || !listRef.current) return;
    const items = listRef.current.querySelectorAll('li');
    items[activeIndex]?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function selectFigure(f) {
    onChange(f.id);
    setOpen(false);
    setQuery('');
    setActiveIndex(-1);
  }

  function handleKeyDown(e) {
    if (!open) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(i => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(i => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      if (activeIndex >= 0 && filtered[activeIndex]) {
        e.preventDefault();
        selectFigure(filtered[activeIndex]);
      }
    } else if (e.key === 'Escape') {
      setOpen(false);
      setActiveIndex(-1);
    }
  }

  return (
    <div ref={ref} className="relative w-full">
      <p className="text-xs text-amber-800/60 mb-1.5 font-sans tracking-widest uppercase ml-1">{label}</p>

      <div className="relative group">
        <input
          className={`w-full px-4 py-3.5 bg-white border-2 rounded-xl outline-none transition-all duration-200 text-base shadow-sm
            ${selected && !open
              ? 'border-amber-600/50 bg-amber-50/30 text-amber-950 font-bold'
              : 'border-amber-700/20 focus:border-amber-600 focus:ring-4 focus:ring-amber-100 placeholder-amber-800/30'
            }`}
          placeholder="搜尋人物..."
          value={displayValue}
          onFocus={() => { setOpen(true); }}
          onChange={e => { setQuery(e.target.value); setOpen(true); }}
          onKeyDown={handleKeyDown}
          aria-autocomplete="list"
          aria-expanded={open}
        />

        {selected && !open && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
            <span className="text-[10px] text-amber-700/40 bg-amber-100 px-1.5 py-0.5 rounded border border-amber-200/50">
              {selected.era}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onChange(null);
                setQuery('');
                setOpen(true);
              }}
              className="pointer-events-auto p-1.5 hover:bg-amber-200/50 rounded-full text-amber-400 hover:text-amber-700 transition-colors"
            >
              ✕
            </button>
          </div>
        )}
      </div>

      {open && (
        <ul
          ref={listRef}
          role="listbox"
          className="absolute z-50 mt-2 w-full max-h-80 overflow-y-auto bg-white rounded-2xl shadow-2xl border border-amber-100 py-2 animate-fade-in no-scrollbar"
        >
          {filtered.length === 0 ? (
            <li className="px-6 py-8 text-center text-amber-800/40 font-sans">找不到符合的人物</li>
          ) : (
            filtered.map((f, idx) => (
              <li key={f.id} role="option" aria-selected={idx === activeIndex}>
                <button
                  className={`w-full flex items-center gap-4 px-5 py-3 text-left transition-colors border-b border-amber-50/50 last:border-0 ${
                    idx === activeIndex ? 'bg-amber-100' : 'hover:bg-amber-50'
                  }`}
                  onMouseDown={(e) => { e.preventDefault(); selectFigure(f); }}
                  onMouseEnter={() => setActiveIndex(idx)}
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-amber-100 rounded-full text-xl shadow-inner shrink-0">
                    {(f.tags && (f.tags.includes('皇帝') || f.tags.includes('國王'))) ? '👑' : '👤'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-amber-950 font-bold text-base">{highlight(f.name_zh, query)}</span>
                      <span className="text-[10px] px-1.5 py-0.5 bg-amber-50 text-amber-600 rounded border border-amber-100 uppercase">{f.era}</span>
                    </div>
                    <span className="block text-xs text-amber-700/50 truncate font-sans italic">{highlight(f.name_en, query)}</span>
                  </div>
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
