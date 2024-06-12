import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Game from './Game';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Button } from '@chakra-ui/react';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-default text-white min-h-screen flex items-center justify-center">
      <div className="text-center p-6">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Caça ao ouro
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          O quão rápido você é para abrir o cofre premiado?
        </motion.p>
        <motion.button
          className="px-6 py-3 bg-caYellow tracking-widest font-black text-lg  rounded-md text-black hover:bg-caYellow/80 transition-all"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          onClick={openModal}
        >
          JOGAR
        </motion.button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} isCentered size="lg">
        <ModalOverlay />
        <ModalContent background={'white'}>
          <ModalHeader>Abra o Cofre</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Game />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default HeroSection;
