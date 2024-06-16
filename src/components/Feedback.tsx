import React, { useState } from "react";
import {
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import useSound from "use-sound";
import ganhouSound from "../assets/sounds/you-win-sequence-1-183948.mp3";
import perdesteSound from "../assets/sounds/negative_beeps-6008.mp3";

interface FeedbackProps {
  message: string;
}

const Feedback: React.FC<FeedbackProps> = ({ message }) => {
  const [playGanhou] = useSound(ganhouSound);
  const [playPerdeste] = useSound(perdesteSound);
  const [ganhouModalOpen, setGanhouModalOpen] = useState(false);
  const [perdeuModalOpen, setPerdeuModalOpen] = useState(false);

  const playSound = (sound: "ganhou" | "perdeste") => {
    switch (sound) {
      case "ganhou":
        playGanhou();
        setGanhouModalOpen(true);
        break;
      case "perdeste":
        playPerdeste();
        setPerdeuModalOpen(true);
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    if (message.includes("Você ganhou!")) {
      playSound("ganhou");
    } else if (
      message.includes("Tecla errada!") ||
      message.includes("Tempo esgotado!")
    ) {
      playSound("perdeste");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  return (
    <Box>
      <Modal
        isCentered
        isOpen={ganhouModalOpen}
        size={"sm"}
        onClose={() => setGanhouModalOpen(false)}
      >
        <ModalOverlay />
        <ModalContent
          paddingBlock={"20px"}
          bgColor="#171717"
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          color="white"
        >
          <ModalHeader
            fontSize={"26px"}
            fontWeight={"800"}
            className="font-bold text-caYellow text-center"
          >
            MISSÃO CUMPRIDA!
            <br />
            <span className="text-white/80 font-semibold">+100 RESPECT</span>
          </ModalHeader>

          <ModalBody>
            <Text className="text-xl text-center">
              Parabéns! Estamos ricos! Agora vaza enquanto a barra tá limpa.
            </Text>
          </ModalBody>
          <ModalFooter>
            <button
              onClick={() => setGanhouModalOpen(false)}
              className="alta-btn3"
            >
              VAZAR
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isCentered
        size={"sm"}
        isOpen={perdeuModalOpen}
        onClose={() => setPerdeuModalOpen(false)}
      >
        <ModalOverlay />
        <ModalContent
          paddingBlock={"20px"}
          bgColor="#171717"
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          color="white"
        >
          <ModalHeader
            fontSize={"26px"}
            fontWeight={"800"}
            className="font-bold text-caYellow text-center"
          >
            TÁ NERVOSO?!
            <br />{" "}
            <span className="text-white/80 font-semibold">
              DESCONFIANÇA +100
            </span>
          </ModalHeader>
          <ModalBody>
            <Text className="text-xl text-center">
              Rala daqui! Tá atrapalhando o serviço.
            </Text>
          </ModalBody>
          <ModalFooter>
            <button
              onClick={() => setPerdeuModalOpen(false)}
              className="alta-btn3"
            >
              VAZAR
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Feedback;
