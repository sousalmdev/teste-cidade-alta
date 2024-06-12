import React from 'react';

interface SequenceProps {
  sequence: string;
  currentIndex: number;
}

const Sequence: React.FC<SequenceProps> = ({ sequence, currentIndex }) => {
  return (
    <div className="text-xl font-mono text-softYellow">
      {sequence.split('').map((char, index) => (
        <span key={index} className={index === currentIndex ? 'text-yellow-500' : ''}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default Sequence;
