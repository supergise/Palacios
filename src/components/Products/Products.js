import React from 'react';
import './products.css';

const Products = () => {
    return (
        <section id='productos'>
            <div className='container-fluid'>

                <div className='row'>
                    
                    <div className='col-12 col-lg-6 ps-5 pe-5 align-self-center'>
                        <div className='row'>
                            <h2 className='subtitleMedium2'>PROBÁ NUESTRAS CÁPSULAS</h2>
                        </div>

                        <div className='row imgProduct'>
                            <img src='./assets/img/6.png' alt='melena de león en cápsulas'/>
                        </div>
                    </div>


                    <div className='col-12 col-lg-6 align-self-center'>
                        <div className='col-12'>
                            <div className='row'>
                                <h2 className='h1Regular titleProducts bodyTypoProducts'>DE LA NATURALEZA A TU MESA</h2>
                            </div>

                            <div className='row bodyTypo bodyTypoProducts'>
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
                    <div className="col-6 offset-6 d-flex justify-content-center align-items-center pt-5">
                    <a href='#beneficios' className='primaryButton botonesTypo'>Conoce más</a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Products;                 
