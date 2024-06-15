import React from "react";
import { motion } from "framer-motion";

import triangle1 from "../assets/img/Polygon 1.png";
import triangle2 from "../assets/img/Polygon 3.png";
import alta from "../assets/img/alta.svg";
import mano from "../assets/img/cidade-alta-mano.png";

const HeroSection = () => {
  return (
    <div className="bg-default text-white  min-h-screen flex items-center justify-center">
      <img
      src={alta}
      alt="alta"
        className="z-1 h-screen w-full animate-pulse overflow-hidden object-cover opacity-20 brightness-50   absolute"
      />
    
     
      <div className="z-10">
        <img
          src={triangle1}
          alt="triangle 1"
          className="absolute bottom-0 md:w-7/12 sm:8/12 w-full left-0 w-auto z-10 drop-shadow-md"
        />
        <img
          src={triangle2}
          alt="triangle 2"
          className="absolute bottom-0 md:w-7/12 sm:8/12 w-full right-0 w-auto z-1 brightness-90 "
        />
      </div>

      <div className="text-center flex flex-col justify-around items-center self-start z-20 p-6">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          src={alta}
          alt="alta"
          className="sm:w-16 w-10 mb-3 "
        />
        <motion.h1
          className="sm:text-5xl text-2xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          CAÇA AO OURO
        </motion.h1>
        <motion.p
          className="text-base sm:text-2xl font-black text-caYellow mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          EM QUANTO TEMPO VOCÊ CONSEGUE DESBLOQUEAR O COFRE?
        </motion.p>
      </div>
      <div className="min-h-screen   z-20 absolute w-full flex items-center justify-center">
        <div className="flex flex-col w-full items-center justify-center">
        <motion.img
        src={mano}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className=" xl:w-1/4 md:w-2/4  sm:w-8/12 w-8/12"
      />
      <motion.a
            className="px-6 py-4 z-50 sm:text-3xl shadow-md xl:w-4/12 md:w-6/12 sm:w-8/12 w-11/12 text-center md:bg-caYellow tracking-widest md:text-black bg-default text-caYellow font-black text-lg  rounded-md hover:bg-default hover:text-caYellow transition-all"
            href="/game"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <button>JOGAR</button>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
