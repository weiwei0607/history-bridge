export function figureEmoji(f) {
  const tags = f?.tags ?? [];
  if (tags.some(t => ['皇帝', '國王', '法老', '天子', '可汗', '女皇'].includes(t))) return '👑';
  if (tags.some(t => ['哲學家', '思想家'].includes(t))) return '🧠';
  if (tags.some(t => ['詩人', '詞人', '文學家', '作家'].includes(t))) return '🖊️';
  if (tags.some(t => ['將軍', '武將', '軍事家'].includes(t))) return '⚔️';
  if (tags.some(t => ['科學家', '數學家', '發明家'].includes(t))) return '🔬';
  if (tags.some(t => ['探險家', '航海家'].includes(t))) return '🧭';
  if (tags.some(t => ['藝術家', '畫家', '雕塑家'].includes(t))) return '🎨';
  if (tags.some(t => ['音樂家', '作曲家'].includes(t))) return '🎵';
  if (tags.some(t => ['宗教', '教宗', '高僧', '神學家', '教士'].includes(t))) return '✝️';
  if (tags.some(t => ['政治家', '外交家', '改革家'].includes(t))) return '🏛️';
  if (tags.some(t => ['商人', '貿易'].includes(t))) return '💰';
  return '👤';
}

export function safeConfetti(opts = {}) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  import('canvas-confetti').then(m => m.default({ particleCount: 100, spread: 70, origin: { y: 0.6 }, ...opts }));
}
