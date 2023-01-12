import React from 'react';
import './home.css';

const Home = () => {
    return (
        <section 
            id='inicio'
            className='zoom-img overflow-img'
        >
            <div className='div-group-home'>
                <img
                    className='img-fluid img' 
                    src='./assets/img/1.png' 
                    alt='melena de león en estado natural, en un bosque'/>

                <div className='div-titles-home slider-home h1Light bodyTypoGrey'>
                    <h1 className='h1Light pb-2'>
                        MELENA <br />
                        DE LEÓN
                    </h1>
                
                    <h2 className='d-none d-md-flex h1Regular bodyTypoGrey'>
                        TU <br />
                        ALIADO <br />
                        IDEAL <br />
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default Home;
