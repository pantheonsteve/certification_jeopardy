// src/components/QuestionSquare/QuestionSquare.js
import React, { useState } from 'react';
import './QuestionSquare.css';

const QuestionSquare = ({ question }) => {

    const [state, setState] = useState('value');

    const handleClick = () => {
        // Update state based on current state
        if (state === 'value') {
            setState('answer');
        } else if (state === 'answer') {
            setState('explanation')
        } else if (state === 'explanation') {
            setState('additional-detail');
        } else {
            setState('answered');
        }
    }

    const valueState = <div className='value-state'><h2>{question.value}</h2></div>;
    const answerState = <div className='answer-state'><h2>{question.question}</h2></div>;
    const explanationState = <div className='explanation-state'><h2>{question.answer}</h2></div>;
    const additionalDetailState = <div className='additional-detail-state'><h2>{question.detail}</h2></div>;
    const answeredState = <div className='answered-state'><h2></h2></div>;

    return (
        <div className="question-square" onClick={handleClick}>
                    {state === 'value' && valueState}
                    {state === 'answer' && answerState}
                    {state === 'explanation' && explanationState}
                    {state === 'additional-detail' && additionalDetailState}
                    {state === 'answered' && answeredState}
        </div>
    );
};

export default QuestionSquare;
