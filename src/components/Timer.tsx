import React from 'react';
import { Box, Text } from "@chakra-ui/react";

interface TimerProps {
  timeLeft: number;
}

const Timer: React.FC<TimerProps> = ({ timeLeft }) => {
  return (
    <Box>
      <Text fontSize="2xl">Time Left: {timeLeft}s</Text>
    </Box>
  );
};

export default Timer;
