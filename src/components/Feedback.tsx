import React from 'react';
import { Box, Text } from "@chakra-ui/react";

interface FeedbackProps {
  message: string;
}

const Feedback: React.FC<FeedbackProps> = ({ message }) => {
  const textColor = message.includes("Você ganhou!") || message.includes('Correto!') ? "green.500" : "red.500";

  return (
    <Box>
      <Text fontSize="sm:2xl" color={textColor}>
        {message}
      </Text>
    </Box>
  );
};

export default Feedback;
