import React from 'react';
import './home.css';
import homeImg from '../../assets/img/default_home.png';

const Home = () => {
    return (
        <section className='section-home zoom-img-home overflow-img-home'>
            <div className='container'>
                <div className='div-group-home'>
                    <img
                        src={homeImg}
                        className='img-home'
                        alt={'xxx'}
                    />
                    <div className='div-titles-home slider-home'>
                        <h1 className='h1-title-1-home'>
                            MELENA DE LEÓN
                        </h1>
                        <h1 className='h1-title-2-home'>
                            TU ALIADO IDEAL
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
