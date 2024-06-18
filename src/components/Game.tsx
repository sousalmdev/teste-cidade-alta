/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import Instructions from "./Instructions";
import Sequence from "./Sequence";
import Timer from "./Timer";
import Feedback from "./Feedback";
import Header from "./Header";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import { BiMedal } from "react-icons/bi";
import velho from "../assets/img/83-832000_person-transparent-gta-gta-5-grand-theft-auto.png";
import { motion } from "framer-motion";

const SEQUENCE_LENGTH = 10; 
const TIME_LIMIT = 20; 

const gerarSequencia = (length: number): string => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
};

const Game: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [instructionsVisible, setInstructionsVisible] = useState(true);
  const [sequence, setSequence] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [gameOver, setGameOver] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [highScores, setHighScores] = useState<number[]>([]);
  const [countdown, setCountdown] = useState(3);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [countdownVisible, setCountdownVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const startGame = () => {
    setGameStarted(true);
    setSequence(gerarSequencia(SEQUENCE_LENGTH));
    setTimeLeft(TIME_LIMIT);
    setCurrentIndex(0);
    setGameOver(false);
    setFeedback("");
    setCountdown(3);
    setCountdownVisible(true);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (gameOver || !gameStarted) return;

    const key = event.key.toUpperCase();
    if (key === sequence[currentIndex]) {
      setCurrentIndex(currentIndex + 1);
      setFeedback("Correto!");

      if (currentIndex + 1 === sequence.length) {
        setGameOver(true);
        setFeedback("Você ganhou!");
        const newScore = TIME_LIMIT - timeLeft;
        const updatedScores = [...highScores, newScore]
          .sort((a, b) => a - b)
          .slice(0, 5);
        setHighScores(updatedScores);
        localStorage.setItem("highScores", JSON.stringify(updatedScores));
      }
    } else {
      setGameOver(true);
      setFeedback("Tecla errada!");
    }
  };

  useEffect(() => {
    window.addEventListener(
      "keydown",
      (e) => inputRef.current && inputRef.current.focus()
    );
    return () => {
      window.removeEventListener(
        "keydown",
        (e) => inputRef.current && inputRef.current.focus()
      );
    };
  }, []);

  useEffect(() => {
    if (countdown > 0 && gameStarted) {
      const countdownTimer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => clearInterval(countdownTimer);
    }
  }, [countdown, gameStarted]);

  useEffect(() => {
    if (countdown === 0) {
      setSequence(gerarSequencia(SEQUENCE_LENGTH));
      setTimeLeft(TIME_LIMIT);
      setGameOver(false);
      setFeedback("");
      setCountdownVisible(false);
    }
  }, [countdown]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0 && !gameOver && gameStarted && countdown === 0) {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      } else if (timeLeft === 0) {
        setGameOver(true);
        setFeedback("Tempo esgotado!");
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

  useEffect(() => {
    const storedHighScores = localStorage.getItem("highScores");
    if (storedHighScores) {
      setHighScores(JSON.parse(storedHighScores));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gold bg-cover bg-no-repeat flex flex-col items-center justify-center">
      <Header />
      {instructionsVisible && (
        <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-black/30 from-0% to-80% to-black backdrop-blur-sm">
          <Instructions onClose={() => setInstructionsVisible(false)} />
        </div>
      )}
      {!instructionsVisible && (
        <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-black/30 from-0% to-80% to-black backdrop-blur-sm">
          {gameStarted ? (
            <>
              {countdown > 0 ? (
                <div className="text-5xl text-default bg-caYellow flex items-center animate-fade-in rounded-full justify-center w-20 h-20">
                  {countdown}
                </div>
              ) : (
                <div className="flex flex-col items-center text-center justify-center">
                  <Sequence
                    feedback={feedback}
                    sequence={sequence}
                    currentIndex={currentIndex}
                  />
                  <Timer timeLimit={TIME_LIMIT} timeLeft={timeLeft} />
                  <Feedback message={feedback} />
                  <button onClick={startGame} className="alta-btn2 mt-4">
                    Reiniciar
                  </button>
                  <input
                    ref={inputRef}
                    type="text"
                    className=" opacity-0 absolute"
                    onKeyDown={handleKeyPress}
                    autoComplete="off"
                    spellCheck="false"
                    autoFocus
                  />
                </div>
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="p-5 flex flex-col items-center justify-center text-center"
            >
              <img
                src={velho}
                loading="eager"
                alt="velho"
                className="md:w-64 w-6/12"
              />
              <div className="flex flex-col bg-black rounded-md p-5 items-center justify-center">
                <h1 className="md:text-4xl text-2xl text-white font-normal mb-4">
                  Bem-vindo ao{" "}
                  <span className="font-black text-caYellow">
                    Caça ao Ouro!
                  </span>
                </h1>
                <p className="text-white md:text-2xl text-base">
                  Pressione o botão abaixo para começar.
                </p>
                <button onClick={startGame} className="alta-btn2 mt-4">
                  Iniciar Jogo
                </button>
              </div>
            </motion.div>
          )}
          <button
            onClick={() => setIsModalOpen(true)}
            className="fixed bottom-4 right-4 bg-caYellow text-black p-3 rounded-full shadow-lg"
          >
            <BiMedal size={24} />
          </button>
          <Modal
            isOpen={isModalOpen}
            isCentered
            size={"sm"}
            onClose={() => setIsModalOpen(false)}
          >
            <ModalOverlay />
            <ModalContent bgColor="#171717" paddingBlock={"20px"}>
              <ModalHeader fontWeight={"black"} className="text-caYellow">
                RECORDES
              </ModalHeader>
              <ModalCloseButton className="text-caYellow" />
              <ModalBody>
                <Text className="text-left text-white/60 text-base">
                  Veja em quanto tempo você conseguiu abrir o cofre e pegar o
                  ouro!
                </Text>
                <ul>
                  {highScores.map((score, index) => (
                    <li
                      className="my-4 flex gap-2 items-center font-black text-caYellow"
                      key={index}
                    >
                      <BiMedal className="text-xl" /> {score} SEGUNDOS
                    </li>
                  ))}
                </ul>
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Game;
