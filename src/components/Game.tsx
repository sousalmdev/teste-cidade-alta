import React, { useState, useEffect } from 'react';
import Instructions from './Instructions';
import Sequence from './Sequence';
import Timer from './Timer';
import Feedback from './Feedback';
import Header from './Header';

const generateSequence = (length: number): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join('');
};

const Game: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [sequence, setSequence] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [highScores, setHighScores] = useState<number[]>([]);
  const [countdown, setCountdown] = useState(3);

  const startGame = () => {
    setSequence(generateSequence(5));
    setCurrentIndex(0);
    setTimeLeft(30);
    setGameOver(false);
    setFeedback('');
    setGameStarted(true);
    setCountdown(3);
  };

  const resetGame = () => {
    setSequence('');
    setCurrentIndex(0);
    setTimeLeft(30);
    setGameOver(false);
    setFeedback('');
    setGameStarted(false);
    setCountdown(3);
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (gameOver || !gameStarted) return;

    const key = event.key.toUpperCase();
    if (key === sequence[currentIndex]) {
      setCurrentIndex(currentIndex + 1);
      setFeedback('Correto!');

      if (currentIndex + 1 === sequence.length) {
        setGameOver(true);
        setFeedback('Você ganhou!');
        const newScore = timeLeft;
        const updatedScores = [...highScores, newScore]
          .sort((a, b) => b - a)
          .slice(0, 5);
        setHighScores(updatedScores);
        localStorage.setItem('highScores', JSON.stringify(updatedScores));
      }
    } else {
      setGameOver(true);
      setFeedback('Tecla errada!');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [gameOver, gameStarted, currentIndex, sequence]);

  useEffect(() => {
    if (!gameStarted) {
      const countdownTimer = setInterval(() => {
        if (countdown > 0) {
          setCountdown(countdown - 1);
        } else {
          clearInterval(countdownTimer);
          startGame();
        }
      }, 1000);

      return () => clearInterval(countdownTimer);
    }
  }, [countdown, gameStarted]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0 && !gameOver && gameStarted) {
        setTimeLeft(timeLeft - 1);
      } else if (timeLeft === 0) {
        setGameOver(true);
        setFeedback('Tempo esgotado!');
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, gameOver, gameStarted]);

  return (
    <div className="min-h-screen bg-default flex flex-col items-center justify-center">
      <Header highScores={highScores} />
      {gameStarted ? (
        <>
          <Sequence sequence={sequence} currentIndex={currentIndex} />
          <Timer timeLeft={timeLeft} />
          <Feedback message={feedback} />
          <button onClick={resetGame} className="bg-caYellow text-default px-4 py-2 mt-4">
            Reiniciar
          </button>
        </>
      ) : (
        <Instructions onStartGame={startGame} />
      )}
    </div>
  );
};

export default Game;
