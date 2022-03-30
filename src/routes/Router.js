import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Question from '../pages/Question/Question';
import Result from '../pages/Result/Result';
import Rule from '../pages/Rule/Rule';

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/question" element={<Question/>} />
                <Route path="/result" element={<Result/>} />
                <Route path="/rule" element={<Rule/>} />
            </Routes>
        </div>
    );
};

export default Router;