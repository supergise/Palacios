import React from 'react';
import './benefits.css';

const Benefits = () => {
    return (
            <section id='beneficios' className='container-fluid d-flex align-items-center justify-content-center'>
                <div >

                    <div className="row">
                        <h2 className='h1Regular titleBenefits text-center'>CONOCÉ SUS BENEFICIOS</h2>
                    </div>

                    <div className="row">
                        <div className="col-12 col-lg-5">
                            <p className='bodyTypo bodyTypoColor pb-3'>
                                Gracias a sus nutrientes, biomoléculas y compuestos activos naturales, la Melena de León (Hericium erinaceus) funciona como:
                            </p>
                            <h2 className='h2Regular bodyTypoColor pb-3'>NEUROPROTECTOR</h2>
                            <h2 className='h2Regular bodyTypoColor pb-3'>ANTIOXIDANTE Y</h2>
                            <h2 className='h2Regular bodyTypoColor pb-3'>ANTIINFLAMATORIO</h2>
                            <p className='bodyTypo bodyTypoColor'>
                                Ayudando a las funciones digestivas, cognitivas y al sistema inmunológico.
                            </p>
                        </div>

                        <div className="col-12 col-lg-7">
                            <img className='img-fluid' src='./assets/img/5.png' alt='melena de león en estado natural'/>
                        </div>
                        
                    </div>

                </div>
            </section>
    );
};

export default Benefits;