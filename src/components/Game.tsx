/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Instructions from './Instructions';
import Sequence from './Sequence';
import Timer from './Timer';
import Feedback from './Feedback';
import Header from './Header';
import velho from '../assets/img/83-832000_person-transparent-gta-gta-5-grand-theft-auto.png';
import { motion } from 'framer-motion';

const gerarSequencia = (length: number): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join('');
};

export const selecionarDificuldades = (difficulty: string) => {
  switch (difficulty) {
    case "Fácil":
      return { sequenceLength: 5, timeLimit: 30 };
    case "Médio":
      return { sequenceLength: 7, timeLimit: 20 };
    case "Difícil":
      return { sequenceLength: 10, timeLimit: 10 };
    default:
      return { sequenceLength: 5, timeLimit: 30 };
  }
};

const Game: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [instructionsVisible, setInstructionsVisible] = useState(true);
  const [sequence, setSequence] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [highScores, setHighScores] = useState<number[]>([]);
  const [countdown, setCountdown] = useState(3);
  const [difficulty, setDifficulty] = useState('Fácil');
  const [countdownVisible, setCountdownVisible] = useState(true); 

  const applyDifficultySettings = () => {
    const settings = selecionarDificuldades(difficulty);
    setSequence(gerarSequencia(settings.sequenceLength));
    setTimeLeft(settings.timeLimit);
    setCurrentIndex(0);
    setGameOver(false);
    setFeedback('');
    setCountdown(3);
    setCountdownVisible(true); 
  };

  const startGame = () => {
    setGameStarted(true);
    applyDifficultySettings();
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
    if (countdown > 0 && gameStarted) {
      const countdownTimer = setInterval(() => {
        setCountdown(countdown - 1);
        if (countdown === 1) {
          setSequence(gerarSequencia(selecionarDificuldades(difficulty).sequenceLength));
          setTimeLeft(selecionarDificuldades(difficulty).timeLimit);
          setGameOver(false);
          setFeedback('');
        }
      },500);

      return () => clearInterval(countdownTimer);
    }
  }, [countdown, gameStarted, difficulty]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0 && !gameOver && gameStarted && countdown === 0) {
        setTimeLeft(timeLeft - 1);
      } else if (timeLeft === 0) {
        setGameOver(true);
        setFeedback('Tempo esgotado!');
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, gameOver, gameStarted, countdown]);

  useEffect(() => {
    if (gameStarted && countdown === 0) {
      const countdownFadeOutTimer = setTimeout(() => {
        setCountdownVisible(false); 
      }, 1000);
      return () => clearTimeout(countdownFadeOutTimer);
    }
  }, [gameStarted, countdown]);

  return (
    <div className="min-h-screen bg-gold  bg-cover bg-no-repeat flex flex-col items-center justify-center">
      <Header sequenceLength={sequence.length} selectedDifficulty={difficulty} highScores={highScores} onSelectDifficulty={setDifficulty} />
      {instructionsVisible && (
          <div className='w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-black/30 from-0% to-80% to-black backdrop-blur-sm'> <Instructions onClose={() => setInstructionsVisible(false)} /></div>
      )}
      {!instructionsVisible && (
        <div className='w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-black/30 from-0% to-80% to-black backdrop-blur-sm'> 
          {gameStarted ? (
            <>
              {countdown > 0 ? (
                <div className="text-5xl text-default bg-caYellow flex items-center animate-ping rounded-full justify-center w-20 h-20">{countdown}</div>
              ) : (
                <div className='flex flex-col items-center text-center justify-center'>
                  <Sequence feedback={feedback} sequence={sequence} currentIndex={currentIndex} />
                  <Timer timeLeft={timeLeft} />
                  <Feedback message={feedback} />
                  <button onClick={startGame} className="bg-caYellow text-default rounded-md px-4 py-2 mt-4 w-11/12">
                    Reiniciar
                  </button>
               </div>
              )}
            </>
          ) : (
            <motion.div
            initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
           className='p-5 flex flex-col items-center justify-center text-center'>
            <img src={velho} loading='eager' alt="velho" className="md:w-64  w-6/12" />
            <div className="flex flex-col bg-black rounded-md p-5 items-center justify-center">
              <h1 className="md:text-4xl text-2xl text-white font-normal mb-4">Bem-vindo ao  <span className='font-black text-caYellow'>Caça ao Ouro!</span></h1>
              <p className="text-white md:text-2xl text-base">Pressione o botão abaixo para começar.</p>
              <button
                onClick={startGame}
                className="bg-caYellow w-11/12 font-bold text-default rounded-md px-4 py-2 mt-10 mb-5"
              >
                Iniciar Jogo
              </button>
            </div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};

export default Game;
