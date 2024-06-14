import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

export interface HighScoresModalProps {
  isOpen: boolean;
  onClose: () => void;
  highScores:number[]
}

const HighScoresModal: React.FC<HighScoresModalProps> = ({ isOpen, onClose }) => {
  const [highScores, setHighScores] = useState<number[]>([]);

  useEffect(() => {
    const highScoresStore = localStorage.getItem('highScores');
    if (highScoresStore) {
      const parsedScores = JSON.parse(highScoresStore) as number[];
      setHighScores(parsedScores);
    }
  }, []);

  return (
    <>
      <Button onClick={onClose} className="bg-caYellow text-default px-4 py-2 mt-4">
        Mostrar Recordes
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Recordes</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ul>
              {highScores.map((score, index) => (
                <li key={index}>{score}s</li>
              ))}
            </ul>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default HighScoresModal;
