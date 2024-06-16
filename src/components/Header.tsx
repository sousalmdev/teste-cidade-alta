import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
} from "@chakra-ui/react";
import {BiDownArrowAlt, BiMedal,BiSolidJoystick} from 'react-icons/bi';
import HighScoresModal from "./HighScoresModal";
import alta from "../assets/img/alta.svg";
import DifficultySelector from "./DifficultySelector";

interface HeaderProps {
  highScores: number[];
  onSelectDifficulty: (difficulty: string) => void;
  selectedDifficulty: string;
  sequenceLength: number;
}

const Header: React.FC<HeaderProps> = ({
  highScores,
  onSelectDifficulty,
  selectedDifficulty,
  sequenceLength,
}) => {
  const [showScoresModal, setShowScoresModal] = React.useState(false);

  const toggleScoresModal = () => {
    setShowScoresModal(!showScoresModal);
  };

  return (
    <header className="fixed top-0 z-50 flex items-center justify-center left-0 right-0 bg-black shadow-md p-4">
      <div className="w-11/12 flex items-center justify-between">
        <a href="/">
          <Image src={alta} alt="alta" boxSize="3rem" />
        </a>
        <Menu>
          <MenuButton
            as={Button}
            bg="transparent"
            color="rgb(255 192 70)"
            _hover={{ bg: "none" }}
            _expanded={{ bg: "none" }}
            _focus={{ boxShadow: "none" }}
            rightIcon={<BiSolidJoystick/>}
          >
            Opções de Jogo
          </MenuButton>
          <MenuList bg="black" padding={'5px'}  color="rgb(255 192 70)">
            <MenuItem icon={<BiMedal className="text-xl"/>} backgroundColor={'transparent'} onClick={toggleScoresModal}>
              Mostrar Recordes
            </MenuItem>
            {showScoresModal && (
              <HighScoresModal
                isOpen={showScoresModal}
                onClose={toggleScoresModal}
                sequenceLength={sequenceLength}
              />
            )}
           
              <DifficultySelector  onSelectDifficulty={onSelectDifficulty} />

          </MenuList>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
