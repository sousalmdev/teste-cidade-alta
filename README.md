# Caça ao Ouro - Cidade Alta

## Descrição

Caça ao Ouro é um jogo de reação e memória onde o objetivo é seguir uma sequência de teclas solicitadas o mais rápido possível. O jogador deve pressionar as teclas na ordem correta dentro de um tempo limite de vinte segundos para ganhar.

## Tecnologias Utilizadas

- **React com Typescript**: Biblioteca JavaScript para construção da interface de usuário, reforçada pela segurança da tipagem do Typescript.
- **Chakra UI**: Biblioteca de componentes para React que facilita a criação de interfaces acessíveis.
- **Framer Motion**: Biblioteca para animações em React.
- **use-sound**: Hook para tocar sons no React.


## Funcionalidades

- **Sequência de teclas**: Gera uma sequência aleatória de dez letras que o jogador deve seguir.
- **Temporizador regressivo**: Um temporizador que conta regressivamente o tempo disponível para o jogador completar a sequência, que é vinte segundos.
- **Feedback sonoro**: Sons de vitória e derrota são reproduzidos dependendo do resultado do jogo.
- **Modais de feedback**: Modais que informam ao jogador se ele ganhou ou perdeu.
- **Sistema de recordes**: Armazena e exibe os melhores tempos do jogador localmente.

## Como Jogar

1. **Iniciar o Jogo**: Pressione o botão "Iniciar Jogo" para começar.
2. **Sequência de Teclas**: Pressione as teclas na sequência correta conforme elas aparecem na tela.
3. **Feedback Imediato**: Receba feedback instantâneo ao pressionar cada tecla.
4. **Vencer ou Perder**: Complete a sequência dentro do tempo limite para vencer. Se o tempo acabar ou pressionar a tecla errada, você perde.
5. **Recordes**: Veja seus melhores tempos no botão de recordes.

## File Tree

```bash
src/
├── assets/
│   ├── img/
│   │   ├── 83-832000_person-transparent-gta-gta-5-grand-theft-auto.png
│   │   ├── Polygon1.png
│   │   ├── Polygon3.png
│   │   ├── alta.svg
│   │   ├── cidade-alta-mano.png
│   │   ├── franklin.png
│   │   └── gold.jpg
│   └── sounds/
│       ├── negative_beeps-6008.mp3
│       └── you-win-sequence-1-183948.mp3
├── components/
│   ├── Feedback.tsx
│   ├── Game.tsx
│   ├── Header.tsx
│   ├── HomePage.tsx
│   ├── Instructions.tsx
│   ├── Sequence.tsx
│   └── Timer.tsx
├── custom.d.ts
├── index.css
├── index.tsx
└── SetupTests.ts
```


## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/sousalmdev/teste-cidade-alta
   cd ca-minigame



2. Instale Dependências e Visualize a aplicação:
   ```bash 
   npm install ;
   npm start
   ```

## Divirta-se! 🏆💰

   