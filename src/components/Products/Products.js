import React from 'react';
import 'animate.css';
import './products.css';

const Products = () => {
    return (
        <section id='productos'>
            <div className='container-fluid'>

                <div className='row'>
                    <div className='col-12 col-lg-6 ps-5 pe-5 align-self-center'>
                        <div className='row'>
                            <h2 className='subtitleMedium2 pb-5 text-center animate__animated animate__pulse animatedhover bodyTypoBlue'>
                                PROBÁ NUESTRAS CÁPSULAS
                            </h2>
                        </div>
                        <div className='row imgProduct pb-5'>
                            <div className='zoom-img overflow-img'>
                                <img className='img corner' src='./assets/img/6.png' alt='melena de león en cápsulas'/>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 align-self-center'>
                        <div className='col-12'>
                            <div className='row'>
                                <h2 className='h1Regular titleProducts bodyTypoBlue'>DE LA NATURALEZA A TU MESA</h2>
                            </div>
                            <div className='row bodyTypo bodyTypoBlue'>
                                <p>
                                    Para aprovechar todas sus propiedades y  beneficios es importante generar el hábito de consumirlos diariamente. 
                                </p>
                                <p>
                                    Por eso nuestras cápsulas elaboradas con extracto de melena de león hacen la ingesta de este hongo nutritivo mucho más sencillo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-6 offset-md-6 d-flex justify-content-md-center align-items-center pt-5 pb-5">
                    <a 
                        href='#beneficios' 
                        className='primaryButton botonesTypo'>Conoce más</a>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Products;                 