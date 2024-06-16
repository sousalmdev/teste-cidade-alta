import React from "react";
import { Box, Progress, Text } from "@chakra-ui/react";

interface TimerProps {
  timeLeft: number;
  timeLimit: number;
}

const Timer: React.FC<TimerProps> = ({ timeLeft, timeLimit }) => {
  const percentage = (timeLeft / timeLimit) * 100;

  return (
    <Box textAlign="center">
      <Progress
        value={percentage}
        size="lg"
        colorScheme="yellow"
        borderRadius="md"
        mb={4}
        isAnimated
      />
      <Text fontSize="xl my-4" color="yellow.400">
        Tempo Restante: {timeLeft} segundos...
      </Text>
    </Box>
  );
};

export default Timer;
