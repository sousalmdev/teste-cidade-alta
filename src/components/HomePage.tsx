import React from "react";
import { motion } from "framer-motion";

import triangle1 from "../assets/img/Polygon 1.png";
import triangle2 from "../assets/img/Polygon 3.png";
import gold from "../assets/img/164394-830743978_medium.mp4";
import alta from "../assets/img/alta.svg";
import mano from "../assets/img/cidade-alta-mano.webp";

const HeroSection = () => {
  return (
    <div className="bg-default text-white min-h-screen flex items-center justify-center">
      <video
        className="z-1 h-screen w-full overflow-hidden object-cover opacity-30 brightness-50  grayscale-50 absolute"
        autoPlay
        loop
      >
        <source type="video/mp4" src={gold} />
      </video>
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
          className="w-16 mb-3 "
        />
        <motion.h1
          className="sm:text-5xl text-3xl font-bold mb-4"
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
        <div className="flex flex-col w-full items-center gap-0 justify-center">
        <motion.img
        src={mano}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className=" 2xl:w-1/3 xl:w-2/3 md:w-2/3 pt-20 sm:w-11/12 w-full"
      />
      <motion.a
            className="px-6 py-4 z-50 sm:text-3xl shadow-md md:w-4/12 sm:w-8/12 w-11/12 text-center md:bg-caYellow tracking-widest md:text-black bg-default text-caYellow font-black text-lg  rounded-md hover:bg-default hover:text-caYellow transition-all"
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
