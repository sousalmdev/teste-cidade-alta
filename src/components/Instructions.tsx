import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

interface InstructionsProps {
  onClose: () => void;
}

const Instructions: React.FC<InstructionsProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);

  const handleNext = () => setStep(step + 1);
  const handlePrevious = () => setStep(step - 1);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const getModalTitle = (step: number) => {
    switch (step) {
      case 1:
        return "Como Jogar";
      case 2:
        return "Modos de Jogo";
      case 3:
        return "Recordes";
      default:
        return "";
    }
  };

  const getModalBody = (step: number, sectionVariants: any) => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg lg:text-2xl"
          >
            O objetivo do jogo é seguir uma sequência solicitada de teclas o
            mais rápido possível. Você verá uma sequência de letras na tela e
            deve pressionar as teclas na ordem correta dentro de um tempo
            limite. Se você pressionar a tecla correta, a próxima tecla da
            sequência será destacada. Se você pressionar uma tecla errada ou o
            tempo acabar, o jogo terminará e você será notificado.
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg lg:text-2xl"
          >
            Você pode escolher entre diferentes níveis de dificuldade:
            <ul className="list-disc list-inside mt-4">
              <li>Fácil: Sequências mais curtas e mais tempo para reagir.</li>
              <li>Médio: Sequências de comprimento médio e tempo moderado.</li>
              <li>Difícil: Sequências longas e tempo reduzido.</li>
            </ul>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg lg:text-2xl"
          >
            Você pode ver os recordes locais na página de recordes. Os recordes
            são armazenados localmente no seu navegador e você pode filtrá-los
            por dificuldade para ver suas melhores pontuações em cada modo de
            jogo.
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <Modal isCentered isOpen onClose={onClose}>
      <ModalOverlay />
      <ModalContent bgColor="transparent" color="white">
        <ModalHeader>{getModalTitle(step)}</ModalHeader>
        <ModalCloseButton color={'rgb(255 192 70)'} />
        <ModalBody>{getModalBody(step, sectionVariants)}</ModalBody>
        <ModalFooter>
          {step > 1 && (
            <Button
              bg={"#171717"}
              color={"rgb(255 192 70)"}
              mr={3}
              onClick={handlePrevious}
            >
              Anterior
            </Button>
          )}
          {step < 3 ? (
            <Button
              bg={"#171717"}
              color={"rgb(255 192 70)"}
              onClick={handleNext}
            >
              Próximo
            </Button>
          ) : (
            <Button
              onClick={onClose}
              bg={"#171717"}
              color={"rgb(255 192 70)"}
            >
              Fechar
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Instructions;
