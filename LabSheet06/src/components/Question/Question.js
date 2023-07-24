import React from 'react';
import './Question.css'

const Question = (props) => {
    return (
        <div>
            <br/><br />
            <label>🔵 Question { props.num }</label>
            
        </div>
    );
};

export default Question;