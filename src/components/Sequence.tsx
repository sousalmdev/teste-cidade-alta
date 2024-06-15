import React from "react";
import { Box } from "@chakra-ui/react";
import franklin from '../assets/img/franklin.png';
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

interface SequenceProps {
  sequence: string;
  currentIndex: number;
  feedback: string;
}

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-2deg); }
  20% { transform: translate(-3px, 0px) rotate(2deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(2deg); }
  50% { transform: translate(-1px, 2px) rotate(-2deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-2deg); }
  80% { transform: translate(-1px, -1px) rotate(2deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-2deg); }
`;

const CharacterBox = styled(Box)<{ isCorrect: boolean; isIncorrect: boolean }>`
  ${(props) => props.isCorrect && `animation: ${bounce} 0.3s linear;`}
  ${(props) => props.isIncorrect && `animation: ${shake} 0.3s linear;`}
`;

const Sequence: React.FC<SequenceProps> = ({ sequence, currentIndex, feedback }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={franklin} loading="eager" alt="franklin" className="md:w-72 w-64" />
      <Box
        display="flex"
        justifyContent="center"
        background={"black"}
        borderRadius={"15px"}
        padding={"20px"}
        alignItems="center"
        flexWrap="wrap"
        gap={2}
      >
        {sequence.split("").map((char, index) => (
          <CharacterBox
            key={index}
            w={10}
            h={10}
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg={index < currentIndex ? "yellow.400" : "gray.700"}
            isCorrect={index === currentIndex - 1 && feedback === 'Correto!'}
            isIncorrect={index === currentIndex && feedback === 'Tecla errada!'}
            color="white"
            borderRadius="md"
            fontSize="xl"
            boxShadow={'2px 3px  rgb(255 255 255 / 0.7)'}
          >
            {char}
          </CharacterBox>
        ))}
      </Box>
    </div>
  );
};

export default Sequence;
