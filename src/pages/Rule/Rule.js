import React from 'react';
import "../../styles/base.css"

const Rule = () => {
    return (
        <div>
            <div className="quiz-rule-section">
                <h1 className="quiz-rule-title">spacGames Quiz Rules</h1>
                <div className="rule-list-container">
                    <ol className="rule-list">
                        <li className="rule-item">There will be 5 questios each carring 5 points.</li>
                        <li className="rule-item">No negative marking.</li>
                        <li className="rule-item">Time limit will be 10mins</li>
                        <li className="rule-item">All the question are compulsary</li>
                        <li className="rule-item">All questions will be Mcq based so only one of them will be correct</li>
                        <li className="rule-item">There is no option to attempt previous question.</li>
                        <li className="rule-item">Submit button will be enabled once you complete all the questions.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Rule;