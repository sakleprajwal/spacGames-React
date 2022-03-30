import React from 'react';
import "../../styles/base.css"

const Question = () => {
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
            <div class="quiz-question-section">
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

                <div class="quiz-navigation">
                    <button class="quiz-btn"><a href="/result-page.html">Submit</a></button>
                    <button class="quiz-btn">Next <i class="far fa-angle-right"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Question;