import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Select,
  useDisclosure,
  MenuItem,
} from "@chakra-ui/react";
import { BiSolidSkull } from "react-icons/bi";

interface DifficultySelectorProps {
  onSelectDifficulty: (difficulty: string) => void;
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({
  onSelectDifficulty,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [difficulty, setDifficulty] = useState("Fácil");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDifficulty = e.target.value;
    setDifficulty(selectedDifficulty);
    onSelectDifficulty(selectedDifficulty);
    onClose();
  };

  return (
    <>
      <MenuItem
        icon={<BiSolidSkull className="text-xl" />}
        onClick={onOpen}
        background={"none"}
      >
        Escolher Dificuldade
      </MenuItem>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bgColor="rgb(255 192 70)"
          paddingBlock={"20px"}
          color="#171717"
        >
          <ModalHeader>Escolha a Dificuldade</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Select
              background={"#171717"}
              color={"rgb(255 192 70)"}
              value={difficulty}
              onChange={handleChange}
            >
              <option value="Fácil">Molezinha</option>
              <option value="Médio">Coisa séria</option>
              <option value="Difícil">Guerra</option>
            </Select>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DifficultySelector;
