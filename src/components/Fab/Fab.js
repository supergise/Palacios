import React from 'react';
import './fab.css';

const Fab = () => {
    return (
            <section id='fab'>
                <a  href="https://api.whatsapp.com/send/?phone=5492612552949&text&app_absent=0" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='iconWathsApp fixed-position'>
                    <img src="./assets/img/whatsapp2.png" alt="botón de whatsapp" />
                </a>
            </section>
    );
};

export default Fab;              