import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/base.css"

const Result = () => {
    return (
        <div>
            <div className="result-section">
                <div className="result-header">
                    <h2>Result</h2>
                    <h4>Final Score:- 8/10</h4>
                </div>

                <div className="question-container">
                    <div className="question-title">
                        Question 1:
                    </div>
                    <div className="question-text">
                        How many seasons of Friends are there?
                    </div>
                    <div className="options-section">
                        <button className="option-btn option1">Twelve Season</button>
                        <button className="option-btn option2">Seven Season</button>
                        <button className="option-btn option3">Ten Season</button>
                        <button className="option-btn option4">Four Season</button>
                    </div>
                </div>

                <div className="question-container">
                    <div className="question-title">
                        Question 2:
                    </div>
                    <div className="question-text">
                        Joey played Dr. Drake Ramoray on which soap opera show?
                    </div>
                    <div className="options-section">
                        <button className="option-btn option1">Mac and C.H.E.E.S.E</button>
                        <button className="option-btn option2">Al Pacino</button>
                        <button className="option-btn option3">Days of Our Lives</button>
                        <button className="option-btn option4">Bamboozled</button>
                    </div>
                </div>

                <div className="quiz-navigation">
                    <button className="quiz-btn"><i className="far fa-angle-left"></i> <Link to="/">Go to Home page</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Result;