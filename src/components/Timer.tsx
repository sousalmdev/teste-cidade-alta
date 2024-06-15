import React from 'react';
import { Box, Text } from "@chakra-ui/react";

interface TimerProps {
  timeLeft: number;
}

const Timer: React.FC<TimerProps> = ({ timeLeft }) => {
  return (
    <Box>
      <Text fontSize="sm:3xl text-xl" className='my-5 text-caYellow'>Tempo Restante: {timeLeft}s</Text>
    </Box>
  );
};

export default Timer;
