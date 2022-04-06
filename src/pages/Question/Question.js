import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/base.css"

const Question = () => {
    const [questionObjs, setQuestionObjs] = useState([])

    const fetchQuestions = async () => {
        try{
            const { data } = await axios.get("https://opentdb.com/api.php?amount=5&category=17&difficulty=easy&type=multiple");
            const data1 = data.results.map((item, index) => {
                return {
                    id: index+1,
                    question: item.question,
                    options: [...item.incorrect_answers, item.correct_answer],
                    correctAnswer: item.correct_answer,
                    selectedAnswer: "",
                    score: 0,
                }
            })
            setQuestionObjs(data1);
        }
        catch(err){
            console.log(err)
        }
    }

    const optionClickHandler = (questionId, selectedOption) => {
        questionObjs.forEach(questionObj => {
            if(questionObj.id === questionId){
                questionObj.selectedAnswer = selectedOption;
                console.log(questionObj.correctAnswer)
            }
        })
    }



    useEffect(() => {
        fetchQuestions();
    }, [])

    return (
        <div>
            
            <div className="quiz-question-section">
                {
                    questionObjs.map(questionObj => 
                    <div key={questionObj.id} className="question-container">
                        <div className="question-title">
                            Question {questionObj.id}:
                        </div>
                        <div className="question-text">
                            {questionObj.question}
                        </div>
                        <div className="options-section">
                            {
                                questionObj.options.map((option, index) =>
                                    <button key={index} onClick={() => optionClickHandler(questionObj.id, option)} className="option-btn option1">{option}</button>
                                    )
                            }
                        </div>
                    </div>
                    )
                }
                <div className="quiz-navigation">
                    <button className="quiz-btn"><Link to="/result">Submit</Link></button>
                    <button className="quiz-btn">Next<i className="far fa-angle-right"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Question;