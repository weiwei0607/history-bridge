import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { generateQuestion } from '../utils/gameLogic';
import { FIGURES } from '../data/figures';

export default function GameMode({ onClose }) {
  const [question, setQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    startNewRound();
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !selectedId && !isGameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !selectedId && !isGameOver) {
      handleTimeout();
    }
  }, [timeLeft, selectedId, isGameOver]);

  function startNewRound() {
    setQuestion(generateQuestion());
    setSelectedId(null);
    setIsCorrect(null);
    setTimeLeft(15);
  }

  function handleTimeout() {
    setIsCorrect(false);
    setSelectedId('timeout');
    setCombo(0);
    // 等待玩家點擊按鈕，不自動跳轉
  }

  function handleSelect(id) {
    if (selectedId) return;
    
    setSelectedId(id);
    const correct = id === question.answerId;
    setIsCorrect(correct);

    if (correct) {
      setScore(s => s + 100 + combo * 10);
      setCombo(c => c + 1);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      setCombo(0);
    }
  }

  if (!question) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-amber-50/95 backdrop-blur-sm animate-fade-in">
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
            <div className={`text-xl font-bold ${timeLeft <= 3 ? 'text-red-400 animate-pulse' : ''}`}>
              ⏱ {timeLeft}s
            </div>
          </div>

          <div className="p-8">
            <h2 className="text-center text-2xl font-bold text-amber-900 mb-6">
              尋找歷史橋樑
            </h2>
            <p className="text-center text-amber-700/80 mb-8">
              誰同時見過以下兩位歷史人物？
            </p>

            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="flex flex-col items-center p-4 bg-amber-50 rounded-xl border border-amber-200 flex-1 min-h-24 justify-center text-center">
                {selectedId && <span className="text-sm text-amber-600 mb-1 animate-fade-in">{FIGURES[question.fromId].era}</span>}
                <span className="text-xl font-bold text-amber-900">{FIGURES[question.fromId].name_zh}</span>
              </div>
              <div className="text-amber-400 font-bold text-2xl">↔</div>
              <div className="flex flex-col items-center p-4 bg-amber-900 text-white rounded-xl shadow-inner w-32 border-2 border-dashed border-amber-700 min-h-24 justify-center">
                <span className="text-sm opacity-70 mb-1">關鍵人物</span>
                <span className="text-xl font-bold">？？？</span>
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
                  <button
                    key={opt.id}
                    onClick={() => handleSelect(opt.id)}
                    disabled={!!selectedId}
                    className={btnClass}
                  >
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
                    <button
                      onClick={startNewRound}
                      className="px-6 py-2 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 transition-colors shadow-lg animate-bounce-slow"
                    >
                      下一題 ➡️
                    </button>
                  )}
                  {!isCorrect && (
                    <button
                      onClick={() => setIsGameOver(true)}
                      className="px-6 py-2 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg"
                    >
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
          <p className="text-amber-700/70 mb-8">你打通了多少條歷史橋樑？</p>
          
          <div className="text-6xl font-black text-amber-500 mb-8">
            {score}
          </div>
          
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => {
                setScore(0);
                setCombo(0);
                setIsGameOver(false);
                startNewRound();
              }}
              className="px-6 py-3 bg-amber-900 text-white rounded-xl font-bold hover:bg-amber-800 transition-colors shadow-md"
            >
              再玩一次
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 bg-white text-amber-900 border border-amber-200 rounded-xl font-bold hover:bg-amber-50 transition-colors"
            >
              返回首頁
            </button>
          </div>
        </div>
      )}
      </div>
      </div>
      );
      }
