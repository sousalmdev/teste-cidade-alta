import React from "react";
import { Image } from "@chakra-ui/react";
import alta from "../assets/img/alta.svg";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="w-11/12 flex items-center justify-center">
        <a href="/">
          <Image src={alta} alt="alta" boxSize="4rem" />
        </a>
      </div>
    </header>
  );
};

export default Header;
