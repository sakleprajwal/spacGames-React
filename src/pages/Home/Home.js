import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/base.css"

const Home = () => {
    return (
        <div>
            

            <div className="quiz-category">
                <div className="quiz-item">
                    <img src="Asset/friends2.jpg" alt="FRIENDS" className="quiz-image" />
                    <div className="quiz-detail">
                        <Link to="/question"><h2 className="Quiz-title">FRIENDS Show</h2></Link>
                        <p className="quiz-subtitle">This is a quiz based on FRIENDS, an American television sitcom which aired on NBC from September 22, 1994, to May 6, 2004</p>
                        <p className="quiz-subtitle">5 Questions</p>
                    </div>
                </div>

                <div className="quiz-item">
                    <img src="Asset/stock-market.jpg" alt="FRIENDS" className="quiz-image" />
                    <div className="quiz-detail">
                        <Link to="/question"><h2 className="Quiz-title">Indian Stock Market</h2></Link>
                        <p className="quiz-subtitle">This is a quiz based on Indian stock market, which basically has two stock exchanges i.e. NSE and BSE and it is 7th biggest in the world.</p>
                        <p className="quiz-subtitle">5 Questions</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;