import React, { useState, useEffect } from "react";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import Sequence from "./Sequence";
import Timer from "./Timer";
import Feedback from "./Feedback";

const generateSequence = (length: number): string => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
};

const Game: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sequence, setSequence] = useState(generateSequence(5));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [highScores, setHighScores] = useState<number[]>([]);

  useEffect(() => {
    const savedScores = localStorage.getItem("highScores");
    if (savedScores) {
      setHighScores(JSON.parse(savedScores));
    }
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
      setFeedback("Time's up!");
    }
  }, [timeLeft, gameOver]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (gameOver) return;
      const key = event.key.toUpperCase();
      if (key === sequence[currentIndex]) {
        setCurrentIndex(currentIndex + 1);
        setFeedback("Correct!");

        if (currentIndex + 1 === sequence.length) {
          setGameOver(true);
          setFeedback("You won!");
          const newScore = timeLeft;
          const updatedScores = [...highScores, newScore]
            .sort((a, b) => b - a)
            .slice(0, 5);
          setHighScores(updatedScores);
          localStorage.setItem("highScores", JSON.stringify(updatedScores));
        }
      } else {
        setGameOver(true);
        setFeedback("Wrong key!");
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentIndex, gameOver, sequence, timeLeft, highScores]);

  const resetGame = () => {
    setSequence(generateSequence(5));
    setCurrentIndex(0);
    setTimeLeft(30);
    setGameOver(false);
    setFeedback("");
  };

  return (
    <>
      <Button onClick={onOpen} >Play Game</Button>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Key Sequence Game</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="text-center space-y-4">
              <Sequence sequence={sequence} currentIndex={currentIndex} />
              <Timer timeLeft={timeLeft} />
              <Feedback message={feedback} />
              <Button onClick={resetGame} mt={4} colorScheme="yellow">Restart</Button>
              <div className="mt-4">
                <h2 className="text-xl">High Scores</h2>
                <ul>
                  {highScores.map((score, index) => (
                    <li key={index}>{score}s</li>
                  ))}
                </ul>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} colorScheme="blue">Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Game;
