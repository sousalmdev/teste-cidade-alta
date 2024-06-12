import React from 'react';

interface TimerProps {
  timeLeft: number;
}

const Timer: React.FC<TimerProps> = ({ timeLeft }) => {
  return (
    <div className="text-lg">
      Time left: <span className="font-bold">{timeLeft}s</span>
    </div>
  );
};
export default Timer;

