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
            <div className=" p-4 rounded-lg shadow-md">
              <p className="mb-4">
                Bem-vindo ao desafio, parça! A missão que a gente te passou é
                facinha, só seguir uma sequência de teclas{" "}
                <span className="font-black text-caYellow">
                  {" "}
                  o mais rápido possível.
                </span>
              </p>
              <p className="mb-4">
                Fica ligado na sequência de letras que vai pintar na tela e
                acerte os botões na ordem correta antes que o tempo acabe e o
                chefe fique boladão!
              </p>
              <p className="mb-4">
                Cada acerto destaca a próxima letra da sequência. Seja rápido e
                preciso, e prove que você é{" "}
                <span className="font-black text-caYellow">
                  o melhor dessas ruas!
                </span>
              </p>
            </div>
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
            <div className=" p-4 rounded-lg shadow-md">
              <p className="mb-4">
                Os recordes são armazenados localmente no seu navegador. Veja
                como você se sai em relação aos melhores tempos registrados.
                Olha ali no{" "}
                <span className="font-black text-caYellow">
                  cantinho à direita. Vê se não enrola hein?!
                </span>
              </p>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg md:text-4xl"
          >
            <div className=" text-center p-4 rounded-lg shadow-md">
              <p className="mb-4">
                Tá pronto? <br />{" "}
                <span className="font-black text-caYellow">HORA DO SHOW!</span>
              </p>
            </div>
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
        <ModalCloseButton color={"rgb(255 192 70)"} />
        <ModalBody fontSize={{ base: "small", sm: "medium" }}>
          {getModalBody(step, sectionVariants)}
        </ModalBody>
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
            <Button onClick={onClose} bg={"#171717"} color={"rgb(255 192 70)"}>
              Fechar
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Instructions;
