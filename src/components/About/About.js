import React from 'react';
import './about.css';

const About = () => {
    return (
        <section id='nosotros' className='container-fluid d-flex align-items-center justify-content-center'>
            <div className="row">
                <div className="col-12 col-xl-7 pb-lg-5 pb-sm-3">
                    <div className="centering">
                        <div class="gallery">
                            <img src="./assets/img/3.png" alt="hongo melena de león colgando de un árbol"/>
                            <img src="./assets/img/7.png" alt="el hongo melena de león en las manos de una persona"/>
                            <img src="./assets/img/8.png" alt="melena de león en su proceso para convertirse en píldora"/>
                            <img src="./assets/img/4.png" alt="píldoras de melena de león"/>
                        </div>
                    </div>
                </div>
                
                <div className="col-12 col-xl-5">
                    <div className="row">
                        <p>
                            <h2 className='h2Regular bodyTypoBlue ps-lg-5 pt-md-4'>NOSOTROS</h2>
                        </p>
                    </div>

                    <div className="row ps-lg-5 pe-lg-5 bodyTypo bodyTypoBlue">
                        <p>
                            Nos encontramos en la provincia de Mendoza, Argentina.
                        </p>
                        <p>
                            Cosechamos la Melena de León en las condiciones óptimas para su crecimiento y lo monitoreamos con el ojo experto de nuestro micólogo, para garantizar un producto de calidad. 
                        </p>
                        <p>
                            Una vez cosechado, este hongo es secado y molido en nuestro laboratorio para luego introducirlo en las cápsulas de gelatina sin sabor. 
                        </p>
                        <p>
                            Así, llega la Melena de león pura a tu organismo.
                        </p>
                        <p>
                            Como parte de nuestra misión es concientizar y dar a conocer los beneficios de la Melena de León en la salud y bienestar, vamos a destinar el 10% de las ventas a labotorios nacionales para más investigación y desarrollo.
                        </p>

                    </div>

                </div>
            </div>

        </section>
    );
};

export default About;                 