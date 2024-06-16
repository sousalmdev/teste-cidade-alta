import React from "react";
import { Box } from "@chakra-ui/react";
import franklin from "../assets/img/franklin.png";
import styled from "@emotion/styled";

interface SequenceProps {
  sequence: string;
  currentIndex: number;
  feedback: string;
}

const CharacterBox = styled(Box)<{ isCorrect: boolean; isIncorrect: boolean }>`
  ${(props) => props.isCorrect && `animation: bounce 0.3s linear;`}
  ${(props) => props.isIncorrect && `animation: shake 0.3s linear;`}
`;

const Sequence: React.FC<SequenceProps> = ({
  sequence,
  currentIndex,
  feedback,
}) => {
  const isAnyIncorrect = feedback === "Tecla errada!";

  return (
    <div className="flex flex-col items-center">
      <img
        src={franklin}
        loading="eager"
        alt="franklin"
        className="md:w-72 w-6/12"
      />
      <Box
        display="flex"
        justifyContent="center"
        background={"black"}
        borderRadius={"15px"}
        padding={"20px"}
        alignItems="center"
        flexWrap="wrap"
        gap={2}
        className={isAnyIncorrect ? "animate-shake" : ""}
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
            isCorrect={index === currentIndex - 1 && feedback === "Correto!"}
            isIncorrect={index === currentIndex && feedback === "Tecla errada!"}
            color="white"
            borderRadius="md"
            fontSize="xl"
            boxShadow={"2px 3px rgb(255 255 255 / 0.7)"}
            className={
              index === currentIndex - 1 && feedback === "Correto!"
                ? "animate-bounce"
                : ""
            }
          >
            {char}
          </CharacterBox>
        ))}
      </Box>
    </div>
  );
};

export default Sequence;
