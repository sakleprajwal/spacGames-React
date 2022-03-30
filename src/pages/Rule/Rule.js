import React from 'react';
import "../../styles/base.css"

const Rule = () => {
    return (
        <div>
            <div class="navbar-section">
                <div class="navbar-brand">
                    <a href="./index.html" class="brand-link"><span>spacGames</span></a>
                </div>
                <div class="navbar-actions">
                    <a href="#" class="category-link"><button class="navbar-icon-btn"><i class="far fa-clipboard-check"></i></button></a>
                    <a href="#" class="category-link"><button class="navbar-icon-btn"><i class="fab fa-github"></i></button></a>
                </div>
            </div>

            <div class="quiz-rule-section">
                <h1 class="quiz-rule-title">spacGames Quiz Rules</h1>
                <div class="rule-list-container">
                    <ol class="rule-list">
                        <li class="rule-item">There will be 5 questios each carring 5 points.</li>
                        <li class="rule-item">No negative marking.</li>
                        <li class="rule-item">Time limit will be 10mins</li>
                        <li class="rule-item">All the question are compulsary</li>
                        <li class="rule-item">All questions will be Mcq based so only one of them will be correct</li>
                        <li class="rule-item">There is no option to attempt previous question.</li>
                        <li class="rule-item">Submit button will be enabled once you complete all the questions.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Rule;