import React from 'react';
import Home from '../Home/Home';
import Products from '../Products/Products';
import Benefits from '../Benefits/Benefits';
import About from '../About/About';
import './main.css';

const Main = () => {
    return (
        <main>
            <div className='box'></div>
            <Home />
            <Products />
            <Benefits />
            <About />
        </main>
    );
};

export default Main;