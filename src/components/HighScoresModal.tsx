import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { selecionarDificuldades } from './Game';

export interface HighScoresModalProps {
  isOpen: boolean;
  onClose: () => void;
  sequenceLength: number;
}

const HighScoresModal: React.FC<HighScoresModalProps> = ({ isOpen, onClose, sequenceLength }) => {
  const [filteredScores, setFilteredScores] = useState<{ difficulty: string; scores: number[] }[]>([]);

  useEffect(() => {
    const filterScores = () => {
      const maxPossibleScore = getMaxPossibleScore(sequenceLength);

      const difficulties = ["Difícil", "Médio", "Fácil"];
      const formattedScores = difficulties.map((difficulty) => ({
        difficulty,
        scores: [maxPossibleScore[difficulty]],
      }));

      setFilteredScores(formattedScores);
    };

    const getMaxPossibleScore = (sequenceLength: number) => {
      const dificilTimeLimit = selecionarDificuldades("Difícil").timeLimit;
      const medioTimeLimit = selecionarDificuldades("Médio").timeLimit;
      const facilTimeLimit = selecionarDificuldades("Fácil").timeLimit;

      const maxPossibleScore: { [key: string]: number } = {};

      if (sequenceLength === 10) {
        maxPossibleScore["Difícil"] = dificilTimeLimit;
        maxPossibleScore["Médio"] = medioTimeLimit;
        maxPossibleScore["Fácil"] = facilTimeLimit;
      } else if (sequenceLength === 7) {
        maxPossibleScore["Médio"] = medioTimeLimit;
        maxPossibleScore["Fácil"] = facilTimeLimit;
      } else if (sequenceLength === 5) {
        maxPossibleScore["Fácil"] = facilTimeLimit;
      }

      return maxPossibleScore;
    };

    if (isOpen) {
      filterScores();
    }
  }, [isOpen, sequenceLength]);

  return (
    <Modal isOpen={isOpen} size={'sm'} isCentered onClose={onClose}>
      <ModalOverlay />
      <ModalContent bgColor="#171717" paddingBlock={'20px'} >
        <ModalHeader fontWeight={'black'} className='text-caYellow'>RECORDES</ModalHeader>
        <ModalCloseButton className='text-caYellow' />
        <ModalBody>
          <ul>
            {filteredScores.map(({ difficulty, scores }, index) => (
              <li className='my-4' key={index}>
                <h2 className='font-normal text-white/90'>Dificuldade: <span className='font-black'>{difficulty}</span></h2>
                <ul className='mt-5'>
                  {scores.map((score, scoreIndex) => (
                    <li className='font-black text-caYellow' key={scoreIndex}>{score} SEGUNDOS</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </ModalBody>

      </ModalContent>
    </Modal>
  );
};

export default HighScoresModal;
