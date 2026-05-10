import { useState, useEffect } from 'react';
import { generateQuestion } from '../utils/gameLogic';
import { FIGURES } from '../data/figures';
import { safeConfetti } from '../utils/emoji';
import { useScrollLock } from '../utils/useScrollLock';

const DIFFICULTIES = [
  { label: '簡單', sub: '20 秒作答', time: 20, color: 'bg-green-600 hover:bg-green-500' },
  { label: '普通', sub: '15 秒作答', time: 15, color: 'bg-amber-600 hover:bg-amber-500' },
  { label: '困難', sub: '10 秒作答', time: 10, color: 'bg-red-600 hover:bg-red-500' },
];

export default function GameMode({ onClose }) {
  useScrollLock(true);
  const [difficulty, setDifficulty] = useState(null); // null = 難度選擇畫面
  const [question, setQuestion]     = useState(null);
  const [score, setScore]           = useState(0);
  const [combo, setCombo]           = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const [isCorrect, setIsCorrect]   = useState(null);
  const [timeLeft, setTimeLeft]     = useState(15);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (difficulty) startNewRound();
  }, [difficulty]);

  useEffect(() => {
    if (!difficulty) return;
    if (timeLeft > 0 && !selectedId && !isGameOver) {
      const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !selectedId && !isGameOver) {
      handleTimeout();
    }
  }, [timeLeft, selectedId, isGameOver, difficulty]);

  function startNewRound() {
    const q = generateQuestion();
    if (!q) { onClose(); return; }
    setQuestion(q);
    setSelectedId(null);
    setIsCorrect(null);
    setTimeLeft(difficulty.time);
  }

  function handleTimeout() {
    setIsCorrect(false);
    setSelectedId('timeout');
    setCombo(0);
  }

  function handleSelect(id) {
    if (selectedId) return;
    setSelectedId(id);
    const correct = id === question.answerId;
    setIsCorrect(correct);
    if (correct) {
      setScore(s => s + 100 + combo * 10);
      setCombo(c => c + 1);
      safeConfetti();
    } else {
      setCombo(0);
    }
  }

  // ── 難度選擇畫面 ──────────────────────────────────────
  if (!difficulty) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-amber-50/95 backdrop-blur-sm animate-fade-in p-4"
        role="dialog" aria-modal="true" aria-label="知識王挑戰"
      >
        <div className="absolute top-4 right-4">
          <button onClick={onClose} className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-amber-900 shadow-md hover:bg-amber-100 transition-colors font-bold text-xl focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none" aria-label="關閉">×</button>
        </div>
        <div className="w-full max-w-sm text-center">
          <p className="text-4xl mb-4">🕹️</p>
          <h2 className="text-2xl font-black text-amber-900 mb-2">知識王挑戰</h2>
          <p className="text-amber-700/70 text-sm mb-2 font-sans">選擇難度，找出同時見過兩位人物的歷史橋梁</p>
          <p className="text-amber-500/70 text-xs mb-8 font-sans">答對得 100 分 + 連擊加成，時間越短連擊越值錢</p>
          <div className="flex flex-col gap-3">
            {DIFFICULTIES.map(d => (
              <button
                key={d.label}
                onClick={() => setDifficulty(d)}
                className={`w-full py-4 rounded-xl font-bold text-white shadow-md transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none ${d.color}`}
              >
                {d.label}
                <span className="ml-2 text-sm font-normal opacity-80">{d.sub}</span>
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-amber-50/95 backdrop-blur-sm animate-fade-in" role="dialog" aria-modal="true" aria-label="知識王挑戰">
      <div className="min-h-full flex items-center justify-center p-4 py-12">
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-amber-900 shadow-md hover:bg-amber-100 transition-colors font-bold text-xl"
          >
            ×
          </button>
        </div>

        {!isGameOver ? (
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-amber-100 relative">
            <div className="sticky top-0 z-20 bg-amber-900 text-amber-50 p-4 flex justify-between items-center rounded-t-2xl">
              <div className="text-xl font-bold tracking-widest">
                分數: {score} <span className="text-amber-400 ml-2 text-sm">🔥 {combo} 連擊</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-amber-400 font-sans">{difficulty.label}</span>
                <div
                  className={`text-xl font-bold ${timeLeft <= 3 ? 'text-red-400 animate-pulse' : ''}`}
                  aria-label={`剩餘時間 ${timeLeft} 秒`}
                  aria-live="polite"
                >
                  ⏱ {timeLeft}s
                </div>
              </div>
            </div>

            <div className="p-8">
              <h2 className="text-center text-2xl font-bold text-amber-900 mb-6">尋找歷史橋樑</h2>
              <p className="text-center text-amber-700/80 mb-8">誰同時見過以下兩位歷史人物？</p>

              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="flex flex-col items-center p-4 bg-amber-50 rounded-xl border border-amber-200 flex-1 min-h-24 justify-center text-center">
                  {selectedId && <span className="text-sm text-amber-600 mb-1 animate-fade-in">{FIGURES[question.fromId].era}</span>}
                  <span className="text-xl font-bold text-amber-900">{FIGURES[question.fromId].name_zh}</span>
                </div>
                <div className="text-amber-400 font-bold text-2xl">↔</div>
                <div className="flex flex-col items-center p-3 bg-amber-900 text-white rounded-xl shadow-inner w-20 sm:w-32 border-2 border-dashed border-amber-700 min-h-24 justify-center">
                  <span className="text-xs sm:text-sm opacity-70 mb-1">關鍵人物</span>
                  <span className="text-lg sm:text-xl font-bold">？？？</span>
                </div>
                <div className="text-amber-400 font-bold text-2xl">↔</div>
                <div className="flex flex-col items-center p-4 bg-amber-50 rounded-xl border border-amber-200 flex-1 min-h-24 justify-center text-center">
                  {selectedId && <span className="text-sm text-amber-600 mb-1 animate-fade-in">{FIGURES[question.toId].era}</span>}
                  <span className="text-xl font-bold text-amber-900">{FIGURES[question.toId].name_zh}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {question.options.map((opt) => {
                  const isSelected = selectedId === opt.id;
                  const isTheAnswer = opt.id === question.answerId;
                  let btnClass = "p-4 text-left border-2 rounded-xl transition-all duration-300 min-h-20 flex flex-col justify-center ";
                  if (!selectedId) {
                    btnClass += "border-amber-200 hover:border-amber-500 hover:bg-amber-50 cursor-pointer shadow-sm";
                  } else if (isTheAnswer) {
                    btnClass += "border-green-500 bg-green-50 text-green-900 ring-2 ring-green-500 ring-opacity-50";
                  } else if (isSelected && !isTheAnswer) {
                    btnClass += "border-red-500 bg-red-50 text-red-900";
                  } else {
                    btnClass += "border-gray-200 opacity-50 cursor-not-allowed";
                  }
                  return (
                    <button key={opt.id} onClick={() => handleSelect(opt.id)} disabled={!!selectedId} className={btnClass}>
                      <div className="font-bold text-lg">{opt.name}</div>
                      {selectedId && <div className="text-sm opacity-70 animate-fade-in">{opt.title}</div>}
                    </button>
                  );
                })}
              </div>

              {selectedId && (
                <div className={`mt-8 p-6 rounded-2xl animate-fade-up shadow-inner ${isCorrect ? 'bg-green-50 border-2 border-green-200 text-green-900' : 'bg-red-50 border-2 border-red-200 text-red-900'}`}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">
                      {isCorrect ? '🎉 太強了！答對了' : `❌ 可惜！正確答案是「${FIGURES[question.answerId].name_zh}」`}
                    </h3>
                    {isCorrect && (
                      <button onClick={startNewRound} className="px-6 py-2 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 transition-colors shadow-lg animate-bounce-slow">
                        下一題 ➡️
                      </button>
                    )}
                    {!isCorrect && (
                      <button onClick={() => setIsGameOver(true)} className="px-6 py-2 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg">
                        查看總分
                      </button>
                    )}
                  </div>
                  <div className="space-y-4">
                    <div className="p-3 bg-white/50 rounded-lg text-sm italic border border-current/10">
                      <div className="font-bold not-italic mb-1">🔗 歷史連線詳情：</div>
                      {question.desc}
                    </div>
                    <div className="text-sm leading-relaxed">
                      <div className="font-bold mb-1">👤 關於 {FIGURES[question.answerId].name_zh}：</div>
                      {FIGURES[question.answerId].bio_zh}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center border border-amber-100 animate-fade-in">
            <h2 className="text-4xl font-bold text-amber-900 mb-2">遊戲結束</h2>
            <p className="text-amber-700/70 mb-2">你打通了多少條歷史橋樑？</p>
            <p className="text-xs text-amber-500 mb-8 font-sans">難度：{difficulty.label}</p>
            <div className="text-6xl font-black text-amber-500 mb-8">{score}</div>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => { setScore(0); setCombo(0); setIsGameOver(false); setDifficulty(null); }}
                className="px-6 py-3 bg-amber-900 text-white rounded-xl font-bold hover:bg-amber-800 transition-colors shadow-md"
              >
                再玩一次
              </button>
              <button onClick={onClose} className="px-6 py-3 bg-white text-amber-900 border border-amber-200 rounded-xl font-bold hover:bg-amber-50 transition-colors">
                返回首頁
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
