// src/components/Category/Category.js
import React from 'react';
import CategoryHeader from '../CategoryHeader/CategoryHeader';
import QuestionSquare from '../QuestionSquare/QuestionSquare';
import './Category.css';

const Category = ({ title, questions }) => {
  return (
    <div className="category">
        <CategoryHeader title={title} />
        {questions.map((question, index) => (
          <QuestionSquare key={index} question={question} />
        ))}
    </div>
  );
};

export default Category;
