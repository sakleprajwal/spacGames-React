import React from 'react';
import "../../styles/base.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar-section">
                <div className="navbar-brand">
                    <Link to="/" className="brand-link"><span>spacGames</span></Link>
                </div>
                <div className="navbar-actions">
                    <Link to="/rule" className="category-link"><button className="navbar-icon-btn"><i className="far fa-clipboard-check"></i></button></Link>
                    <Link to="/" className="category-link"><button className="navbar-icon-btn"><i className="fab fa-github"></i></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;