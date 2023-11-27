import React from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';

function App() {
  const categories = [
    {
      title: 'WebOps',
      questions: [
        { value: '$100', question: 'Question 1', answer: 'Answer 1', detail: 'Additional Detail' },
        { value: '$200', question: 'Question 1', answer: 'Answer 1', detail: 'Additional Detail' },
        { value: '$300', question: 'Question 1', answer: 'Answer 1', detail: 'Additional Detail' },
        { value: '$400', question: 'What is James Bresnick\'s favorite basketball team?', answer: 'The Boston Celtics', detail: 'His favorite players are Jayson Tatum, Jalen Brown, Kritaps Porzingas, Jrue Holliday, LeBron James, and Giannis Atentakuompo.' },
        { value: '$500', question: 'Question 1', answer: 'Answer 1', detail: 'Additional Detail' },
      ],
    },
    {
      title: 'Automation',
      questions: [
        { value: '$100', question: 'Question 1', answer: 'Answer 1', detail: 'Additional Detail' },
        { value: '$200', question: 'Question 1', answer: 'Answer 1', detail: 'Additional Detail' },
        { value: '$300', question: 'Question 1', answer: 'Answer 1', detail: 'Additional Detail' },
        { value: '$400', question: 'Question 1', answer: 'Answer 1', detail: 'Additional Detail' },
        { value: '$500', question: 'Question 1', answer: 'Answer 1', detail: 'Additional Detail' },
      ],
    },
    {
      title: 'AGCDN',
      questions: [
        { value: '$100', question: 'Question 1', answer: 'Answer 1', detail: 'Additional Detail' },
        { value: '$200', question: 'Question 1', answer: 'Answer 1', detail: 'Additional Detail' },
        { value: '$300', question: 'Question 1', answer: 'Answer 1', detail: 'Additional Detail' },
        { value: '$400', question: 'Question 1', answer: 'Answer 1', detail: 'Additional Detail' },
        { value: '$500', question: 'What are James Bresnick\'s most impressive personal traits?', answer: 'He is a great friend, he is super funny, he is a great artist, he is awesome at soccer, basketball, and baseball.', detail: 'He is an awesome kid!' },
      ],
    },
    {
      title: 'CMS Best Practices',
      questions: [
        { value: '$100', question: 'Question 1', answer: 'Answer 1', detail: 'Additional Detail' },
        { value: '$200', question: 'Question 1', answer: 'Answer 1', detail: 'Additional Detail' },
        { value: '$300', question: 'Question 1', answer: 'Answer 1', detail: 'Additional Detail' },
        { value: '$400', question: 'Question 1', answer: 'Answer 1', detail: 'Additional Detail' },
        { value: '$500', question: 'What is James Bresnick\'s favorite card to collect?', answer: 'Jayson Tatum rookie card', detail: 'He also likes to collect Michael Jordan.' },
      ],
    },
    {
      title: 'Pantheon 101',
      questions: [
        { value: '$100', question: 'Question 1', answer: 'Answer 1', detail: 'Additional Detail' },
        { value: '$200', question: 'Question 1', answer: 'Answer 1', detail: 'Additional Detail' },
        { value: '$300', question: 'Question 1', answer: 'Answer 1', detail: 'Additional Detail' },
        { value: '$400', question: 'Question 1', answer: 'Answer 1', detail: 'Additional Detail' },
        { value: '$500', question: 'Question 1', answer: 'Answer 1', detail: 'Additional Detail' },
      ],
    },
    {
      title: 'Sites & Aplications',
      questions: [
        { value: '$100', question: 'Question 1', answer: 'Answer 1', detail: 'Additional Detail' },
        { value: '$200', question: 'Question 1', answer: 'Answer 1', detail: 'Additional Detail' },
        { value: '$300', question: 'Question 1', answer: 'Answer 1', detail: 'Additional Detail' },
        { value: '$400', question: 'Question 1', answer: 'Answer 1', detail: 'Additional Detail' },
        { value: '$500', question: 'Question 1', answer: 'Answer 1', detail: 'Additional Detail' },
      ],
    },
    // ...other categories
  ];

  return (
    <div className="App">
      <GameBoard categories={categories} />
    </div>
  );
}

export default App;
