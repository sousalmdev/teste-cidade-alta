import React,{useState} from 'react';
import HighScoresModal from './HighScoresModal';
import alta from '../assets/img/alta.svg'
interface HeaderProps {
  highScores: number[];
}

const Header: React.FC<HeaderProps> = ({ highScores }) => {
  const [showScoresModal, setShowScoresModal] = useState(false);

  const toggleScoresModal = () => {
    setShowScoresModal(!showScoresModal);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 flex justify-between items-center">
      <img src={alta} alt="alta" className='w-20' />
      <div>
        <button
          onClick={toggleScoresModal}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg"
        >
          Recordes
        </button>
        <HighScoresModal
          isOpen={showScoresModal}
          onClose={toggleScoresModal}
          highScores={highScores}
        />
      </div>
    </header>
  );
};

export default Header;
