import React from 'react';
import './main.css';
import Home from '../Home/Home';
import Faq from '../Faq/Faq';

const Main = () => {
    return (
        <main className='main'>
            <div className='container'>
                <div className='row'>
                    <Home />
                </div>
                <div className='row'>
                    <Faq />
                </div>
            </div>
        </main>
    );
};

export default Main;
