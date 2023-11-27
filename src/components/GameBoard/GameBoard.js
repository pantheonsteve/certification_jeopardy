// src/components/GameBoard/GameBoard.js
import React from 'react';
import Category from '../Category/Category';
import './GameBoard.css';

const GameBoard = ({ categories }) => {
  return (
    <div className="game-board">
      {categories.map((category, index) => (
      <Category key={index} title={category.title} questions={category.questions} />
      ))}
    </div>
  );
};

export default GameBoard;
