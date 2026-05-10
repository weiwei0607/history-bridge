import { useState, useEffect } from 'react';
import { FIGURES } from '../data/figures';
import { safeConfetti } from '../utils/emoji';
import { useScrollLock } from '../utils/useScrollLock';

const DIFFICULTIES = [
  { label: '簡單', sub: '先給 2 條線索', startHints: 2, bonus: 50 },
  { label: '普通', sub: '先給 1 條線索', startHints: 1, bonus: 100 },
  { label: '困難', sub: '0 線索起步',   startHints: 0, bonus: 200 },
];

function generateGuessQuestion() {
  const ids = Object.keys(FIGURES);
  const answerId = ids[Math.floor(Math.random() * ids.length)];
  const answer = FIGURES[answerId];

  const hint1 = `這位人物活躍於「${answer.era}」的「${answer.region}」。`;
  const hint2 = `他/她的身份標籤包含：${answer.tags.join('、')}。`;

  let sentences = answer.bio_zh.split(/。|；/).filter(s => s.trim().length > 5);
  sentences = sentences.map(s => s.replace(new RegExp(answer.name_zh, 'g'), '此人'));
  const hint3 = sentences.length > 0
    ? `生平事蹟：「${sentences[Math.floor(Math.random() * sentences.length)]}」`
    : '是一位極具影響力的歷史人物。';

  const options = new Set([answerId]);
  while (options.size < 4) {
    options.add(ids[Math.floor(Math.random() * ids.length)]);
  }

  const optArray = Array.from(options);
  for (let i = optArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optArray[i], optArray[j]] = [optArray[j], optArray[i]];
  }

  return {
    answerId,
    hints: [hint1, hint2, hint3],
    options: optArray.map(id => ({
      id,
      name: FIGURES[id].name_zh,
      title: FIGURES[id].tags[0] || '歷史人物'
    }))
  };
}

export default function GuessWhoMode({ onClose }) {
  useScrollLock(true);
  const [difficulty, setDifficulty] = useState(null);
  const [question, setQuestion]     = useState(null);
  const [score, setScore]           = useState(0);
  const [hintLevel, setHintLevel]   = useState(1);
  const [selectedId, setSelectedId] = useState(null);
  const [isCorrect, setIsCorrect]   = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (difficulty) startNewRound();
  }, [difficulty]);

  function startNewRound() {
    setQuestion(generateGuessQuestion());
    setSelectedId(null);
    setIsCorrect(null);
    setHintLevel(difficulty.startHints);
  }

  function handleSelect(id) {
    if (selectedId) return;
    setSelectedId(id);
    const correct = id === question.answerId;
    setIsCorrect(correct);
    if (correct) {
      const hintsUsed = hintLevel;
      const earned = difficulty.bonus + Math.max(0, (2 - hintsUsed) * 50);
      setScore(s => s + earned);
      safeConfetti();
    }
  }

  function showNextHint() {
    if (hintLevel < 3) setHintLevel(h => h + 1);
  }

  // ── 難度選擇畫面 ──────────────────────────────────────
  if (!difficulty) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-indigo-950/95 backdrop-blur-md animate-fade-in p-4" role="dialog" aria-modal="true" aria-label="猜猜我是誰">
        <div className="absolute top-4 right-4">
          <button onClick={onClose} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white shadow-md hover:bg-white/20 transition-colors font-bold text-xl">×</button>
        </div>
        <div className="w-full max-w-sm text-center">
          <p className="text-4xl mb-4">🕵️‍♂️</p>
          <h2 className="text-2xl font-black text-white mb-2">猜猜我是誰</h2>
          <p className="text-indigo-300 text-sm mb-8 font-sans">根據線索猜出歷史人物，線索越少得分越高</p>
          <div className="flex flex-col gap-3">
            {DIFFICULTIES.map(d => (
              <button
                key={d.label}
                onClick={() => setDifficulty(d)}
                className="w-full py-4 rounded-xl font-bold text-white shadow-md bg-indigo-600 hover:bg-indigo-500 transition-colors"
              >
                {d.label}
                <span className="ml-2 text-sm font-normal opacity-80">{d.sub}</span>
                <span className="ml-2 text-xs opacity-60">答對 +{d.bonus}～{d.bonus + 100}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!question) return null;

  // ── 遊戲畫面 ──────────────────────────────────────────
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-indigo-950/95 backdrop-blur-md animate-fade-in" role="dialog" aria-modal="true" aria-label="猜猜我是誰">
      <div className="min-h-full flex items-center justify-center p-4 py-12">
        <div className="absolute top-4 right-4 z-10">
          <button onClick={onClose} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white shadow-md hover:bg-white/20 transition-colors font-bold text-xl">×</button>
        </div>

        {!isGameOver ? (
          <div className="w-full max-w-2xl bg-indigo-900/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-indigo-500/30 relative overflow-hidden">
            <div className="bg-indigo-800/80 text-indigo-100 p-4 flex justify-between items-center border-b border-indigo-500/30">
              <div className="text-lg font-bold tracking-widest flex items-center gap-2">
                🕵️‍♂️ 猜猜我是誰
                <span className="text-xs font-normal text-indigo-400">{difficulty.label}</span>
              </div>
              <div className="text-lg font-bold text-amber-400">分數: {score}</div>
            </div>

            <div className="p-8">
              <h2 className="text-center text-3xl font-black text-white mb-8 drop-shadow-md">「我是誰？」</h2>

              <div className="space-y-4 mb-8">
                {hintLevel === 0 ? (
                  <div className="p-5 bg-white/5 border border-white/10 rounded-2xl text-indigo-400 text-center">
                    尚無線索——你敢直接猜嗎？
                  </div>
                ) : (
                  question.hints.slice(0, hintLevel).map((hint, idx) => (
                    <div key={idx} className="p-5 bg-white/10 border border-white/20 rounded-2xl text-indigo-50 text-lg shadow-inner animate-fade-up flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/50 flex items-center justify-center font-bold text-sm">{idx + 1}</span>
                      <p className="leading-relaxed pt-1">{hint}</p>
                    </div>
                  ))
                )}
              </div>

              <div className="flex justify-center mb-8">
                {!selectedId && hintLevel < 3 ? (
                  <button
                    onClick={showNextHint}
                    className="px-6 py-2 rounded-full border border-indigo-400 text-indigo-300 hover:bg-indigo-500/20 transition-colors text-sm font-bold flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                  >
                    🔍 給我更多線索 <span className="opacity-60 font-normal">(扣減獎勵分數)</span>
                  </button>
                ) : !selectedId && hintLevel >= 3 ? (
                  <p className="text-xs text-indigo-500/60 font-sans">已顯示所有線索，憑感覺猜吧！</p>
                ) : null}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {question.options.map((opt) => {
                  const isSelected = selectedId === opt.id;
                  const isTheAnswer = opt.id === question.answerId;
                  let btnClass = "p-4 text-left border-2 rounded-xl transition-all duration-300 min-h-20 flex flex-col justify-center ";
                  if (!selectedId) {
                    btnClass += "border-indigo-400/30 bg-indigo-950/50 text-indigo-100 hover:border-indigo-400 hover:bg-indigo-800 cursor-pointer shadow-sm";
                  } else if (isTheAnswer) {
                    btnClass += "border-green-400 bg-green-900/80 text-green-100 ring-2 ring-green-400 ring-opacity-50";
                  } else if (isSelected && !isTheAnswer) {
                    btnClass += "border-red-400 bg-red-900/80 text-red-100";
                  } else {
                    btnClass += "border-indigo-900/50 bg-indigo-950/30 text-indigo-900/50 cursor-not-allowed";
                  }
                  return (
                    <button key={opt.id} onClick={() => handleSelect(opt.id)} disabled={!!selectedId} className={btnClass}>
                      <div className="font-bold text-lg">{opt.name}</div>
                      {selectedId && <div className="text-sm opacity-70 animate-fade-in mt-1">{opt.title}</div>}
                    </button>
                  );
                })}
              </div>

              {selectedId && (
                <div className={`mt-8 p-6 rounded-2xl animate-fade-up shadow-inner ${isCorrect ? 'bg-green-900/40 border border-green-500/30 text-green-100' : 'bg-red-900/40 border border-red-500/30 text-red-100'}`}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">
                      {isCorrect ? '🎉 答對了！' : `❌ 錯了！我是「${FIGURES[question.answerId].name_zh}」`}
                    </h3>
                    <div className="flex gap-2">
                      <button
                        onClick={startNewRound}
                        className={`px-6 py-2 text-white rounded-full font-bold transition-colors shadow-lg animate-bounce-slow ${isCorrect ? 'bg-green-600 hover:bg-green-500' : 'bg-indigo-600 hover:bg-indigo-500'}`}
                      >
                        下一位 ➡️
                      </button>
                      {!isCorrect && (
                        <button onClick={() => setIsGameOver(true)} className="px-6 py-2 bg-red-950/50 border border-red-500/30 text-red-200 rounded-full font-bold hover:bg-red-900 transition-colors">
                          放棄結算
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="text-sm leading-relaxed mt-4 bg-black/20 p-4 rounded-xl border border-white/5">
                    <div className="font-bold mb-2 text-amber-300">📖 人物小傳：</div>
                    {FIGURES[question.answerId].bio_zh}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="w-full max-w-md bg-indigo-900/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 text-center border border-indigo-500/30 animate-fade-in">
            <h2 className="text-4xl font-black text-white mb-2">結算成績</h2>
            <p className="text-indigo-300 mb-1">你的歷史直覺有多準？</p>
            <p className="text-xs text-indigo-400 mb-8 font-sans">難度：{difficulty.label}</p>
            <div className="text-7xl font-black text-amber-400 mb-10 drop-shadow-lg">{score}</div>
            <div className="flex flex-col gap-4 justify-center">
              <button
                onClick={() => { setScore(0); setIsGameOver(false); setDifficulty(null); }}
                className="px-6 py-4 bg-amber-500 text-amber-950 rounded-xl font-black text-lg hover:bg-amber-400 transition-colors shadow-lg"
              >
                再猜一次
              </button>
              <button onClick={onClose} className="px-6 py-4 bg-indigo-950 text-indigo-200 border border-indigo-700 rounded-xl font-bold hover:bg-indigo-800 transition-colors">
                返回首頁
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
