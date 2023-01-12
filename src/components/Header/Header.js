import React from 'react';
import Navbar from '../NavBar/NavBar';
import Fab from '../Fab/Fab';

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