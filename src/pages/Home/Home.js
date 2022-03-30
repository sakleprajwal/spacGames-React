import React from 'react';
import "../../styles/base.css"

const Home = () => {
    return (
        <div>
            <div className="navbar-section">
                <div className="navbar-brand">
                    <a href="/" className="brand-link"><span>spacGames</span></a>
                </div>
                <div className="navbar-actions">
                    <a href="/" className="category-link"><button className="navbar-icon-btn"><i className="far fa-clipboard-check"></i></button></a>
                    <a href="/" className="category-link"><button className="navbar-icon-btn"><i className="fab fa-github"></i></button></a>
                </div>
            </div>

            <div className="quiz-category">
                <div className="quiz-item">
                    <img src="Asset/friends2.jpg" alt="FRIENDS" className="quiz-image" />
                    <div className="quiz-detail">
                        <a href="/"><h2 className="Quiz-title">FRIENDS Show</h2></a>
                        <p className="quiz-subtitle">This is a quiz based on FRIENDS, an American television sitcom which aired on NBC from September 22, 1994, to May 6, 2004</p>
                        <p className="quiz-subtitle">5 Questions</p>
                    </div>
                </div>

                <div className="quiz-item">
                    <img src="Asset/stock-market.jpg" alt="FRIENDS" className="quiz-image" />
                    <div className="quiz-detail">
                        <a href="/"><h2 className="Quiz-title">Indian Stock Market</h2></a>
                        <p className="quiz-subtitle">This is a quiz based on Indian stock market, which basically has two stock exchanges i.e. NSE and BSE and it is 7th biggest in the world.</p>
                        <p className="quiz-subtitle">5 Questions</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;