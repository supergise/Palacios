import React from 'react';
import Navbar from '../NavBar/NavBar';
import Fab from '../Fab/Fab';

import './header.css';

const Header = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <Fab/>
        </>
    );
};

export default Header;