import React from 'react';
import { Box } from "@chakra-ui/react";

interface SequenceProps {
  sequence: string;
  currentIndex: number;
}

const Sequence: React.FC<SequenceProps> = ({ sequence, currentIndex }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" gap={2}>
      {sequence.split('').map((char, index) => (
        <Box
          key={index}
          w={12}
          h={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg={index < currentIndex ? "green.500" : "gray.700"}
          color="white"
          borderRadius="md"
          fontSize="2xl"
        >
          {char}
        </Box>
      ))}
    </Box>
  );
};

export default Sequence;
