
import React from 'react';
import './aboutus.css';
import image1 from '../../assets/img/image-1-about-us.png';
import image2 from '../../assets/img/image-2-about-us.png';
import image3 from '../../assets/img/image-3-about-us.png';
import image4 from '../../assets/img/image-4-about-us.png';

const Aboutus = () => {
    return (
        <section id='nosotros' className='section-aboutus'>

            <div className='container d-flex div-aboutus'>

            <div className='col div-images-aboutus'>

                    <div className='row'>
                        <div className='col d-flex'>
                            <img
                                id='img-1-aboutus'
                                src={image1}
                                className='img-1-aboutus width-img-aboutus height-1-img-aboutus'
                                alt={'xxx'}
                            />
                            <img
                                src={image2}
                                className='img-2-aboutus width-img-aboutus height-1-img-aboutus'
                                alt={'xxx'}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <img
                                src={image3}
                                className='img-3-aboutus width-img-aboutus height-2-img-aboutus'
                                alt={'xxx'}
                            />
                            <img
                                src={image4}
                                className='img-4-aboutus width-img-aboutus height-2-img-aboutus'
                                alt={'xxx'}
                            />
                        </div>
                    </div>

            </div>

                <div className='col div-text-aboutus'>
                    <h2 className='h2Regular'>NOSOTROS</h2>
                    <p>
                        Nos encontramos en la provincia de Mendoza, Argentina.<br/><br/>
                        Cosechamos la Melena de León en las condiciones óptimas para su crecimiento y lo monitoreamos con el ojo experto de nuestro micólogo, para garantizar un producto de calidad.<br/><br/>
                        Una vez cosechado, este hongo es secado y molido en nuestro laboratorio para luego introducirlo en las cápsulas de gelatina sin sabor. <br/><br/>
                        Así, llega la Melena de león pura a tu organismo.<br/><br/>
                        Como parte de nuestra misión es concientizar y dar a conocer los beneficios de la Melena de León en la salud y bienestar, vamos a destinar el 10% de las ventas a labotorios nacionales para más investigación y desarrollo.<br/><br/>
                    </p>
                </div>

            </div>

		</section>
    );
};

export default Aboutus;
