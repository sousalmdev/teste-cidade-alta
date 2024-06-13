import React from "react";
import { motion } from "framer-motion";

import triangle1 from "../assets/img/Polygon 1.png";
import triangle2 from "../assets/img/Polygon 3.png";
import gold from "../assets/img/164394-830743978_medium.mp4";
import alta from "../assets/img/alta.svg";
import mano from "../assets/img/cidade-alta-mano.webp";

const HeroSection = () => {
  return (
    <div className="bg-default text-white overflow-y-hidden min-h-screen flex items-center justify-center">
      <video
        className="z-1 h-screen w-full overflow-hidden object-cover opacity-30 brightness-50  grayscale-50 absolute"
        loop
        autoPlay
      >
        <source src={gold} />
        <source />
      </video>
      <div className="z-10">
        <img
          src={triangle1}
          alt="triangle 1"
          className="absolute bottom-0 md:w-7/12 w-full left-0 w-auto z-10 drop-shadow-md"
        />
        <img
          src={triangle2}
          alt="triangle 2"
          className="absolute bottom-0 md:w-7/12 w-full right-0 w-auto z-1 brightness-90 "
        />
      </div>
      <motion.img
        src={mano}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute md:bottom-0 sm:bottom-8 bottom-0 sm:w-auto w-11/12"
      />
      <div className="text-center flex flex-col justify-around items-center self-start z-20 p-6">
        <motion.img initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5,delay:1.2 }} src={alta} alt="alta" className="w-16 mb-3 " />
        <motion.h1
          className="sm:text-5xl text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          CAÇA AO OURO
        </motion.h1>
        <motion.p
          className="text-base md:text-2xl font-black text-caYellow mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          EM QUANTO TEMPO VOCÊ CONSEGUE DESBLOQUEAR O COFRE?
        </motion.p>
      </div>
      <div className="top-1/2  mt-40 z-20 absolute w-full flex items-center justify-center">
        <motion.a
          className="px-6 py-3 shadow-md md:w-4/12 sm:w-8/12 w-11/12 text-center z-50 md:bg-caYellow tracking-widest md:text-black bg-default text-caYellow font-black text-lg  rounded-md hover:bg-default hover:text-caYellow transition-all"
          href="/instructions"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <button>JOGAR</button>
        </motion.a>
      </div>
    </div>
  );
};

export default HeroSection;
