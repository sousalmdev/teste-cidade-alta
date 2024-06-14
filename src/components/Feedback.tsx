import React from 'react';
import { Box, Text } from "@chakra-ui/react";

interface FeedbackProps {
  message: string;
}

const Feedback: React.FC<FeedbackProps> = ({ message }) => {
  return (
    <Box>
      <Text fontSize="2xl" color={message === "Correct!" ? "green.500" : "red.500"}>
        {message}
      </Text>
    </Box>
  );
};

export default Feedback;
