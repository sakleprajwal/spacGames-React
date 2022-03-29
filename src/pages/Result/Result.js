import React from 'react';
import "../../styles/base.css"

const Result = () => {
    return (
        <div>
            <div class="navbar-section">
                <div class="navbar-brand">
                    <a href="/" class="brand-link"><span>spacGames</span></a>
                </div>
                <div class="navbar-actions">
                    <a href="/" class="category-link"><button class="navbar-icon-btn"><i class="far fa-clipboard-check"></i></button></a>
                    <a href="/" class="category-link"><button class="navbar-icon-btn"><i class="fab fa-github"></i></button></a>
                </div>
            </div>

            <div class="result-section">
                <div class="result-header">
                    <h2>Result</h2>
                    <h4>Final Score:- 8/10</h4>
                </div>

                <div class="question-container">
                    <div class="question-title">
                        Question 1:
                    </div>
                    <div class="question-text">
                        How many seasons of Friends are there?
                    </div>
                    <div class="options-section">
                        <button class="option-btn option1">Twelve Season</button>
                        <button class="option-btn option2">Seven Season</button>
                        <button class="option-btn option3">Ten Season</button>
                        <button class="option-btn option4">Four Season</button>
                    </div>
                </div>

                <div class="question-container">
                    <div class="question-title">
                        Question 2:
                    </div>
                    <div class="question-text">
                        Joey played Dr. Drake Ramoray on which soap opera show?
                    </div>
                    <div class="options-section">
                        <button class="option-btn option1">Mac and C.H.E.E.S.E</button>
                        <button class="option-btn option2">Al Pacino</button>
                        <button class="option-btn option3">Days of Our Lives</button>
                        <button class="option-btn option4">Bamboozled</button>
                    </div>
                </div>

                <div class="quiz-navigation">
                    <button class="quiz-btn"><i class="far fa-angle-left"></i> <a href="/">Go to Home page</a></button>
                </div>
            </div>
        </div>
    );
};

export default Result;