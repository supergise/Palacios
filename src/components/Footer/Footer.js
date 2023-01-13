import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <section 
            id='contacto' 
            className='container-fluid d-flex justify-content-center align-items-center text-center'>
            
            <div className="row">
                <div className="col-12 col-lg-2 pb-2">
                    <h3 className='h3Semibold'>DATOS DE CONTACTO</h3>
                </div>
                
                <div className="col-12 col-lg-4 pb-2">
                    <div className="row">
                        <a href="https://api.whatsapp.com/send/?phone=5492612552949&text&app_absent=0" target="_blank" rel="noopener noreferrer" className='footerTypo botonesTypo'>
                            <img 
                                className='icon' 
                                src="./assets/icons/whatsapp.png" 
                                alt="ícono de whatsapp" />
                            <span className='botonesTypo'>+54 9 2612 55-2949</span>
                        </a>
                    </div>
                    <img 
                        className='icon' 
                        src="./assets/icons/gmail.png" 
                        alt="ícono de mail" />
                    <span className='botonesTypo footerTypo'>admin@sporehills.com</span>
                </div>

                <div className="col-12 col-lg-2 pb-2">
                <h3 className='h3Semibold'>¡SEGUINOS EN REDES!</h3>
                </div>

                <div className="col-12 col-lg-4 pb-2">
                    <div className="row">
                        <a href="https://www.instagram.com/sporehills/" target="_blank" rel="noopener noreferrer" className='footerTypo botonesTypo'>
                            <img className='icon' src="./assets/icons/instagram.png" alt="ícono de instagram" />
                            <span className='botonesTypo'>@sporehills</span>
                        </a>
                    </div>
                    <a href="https://www.facebook.com/profile.php?id=100087875649963" target="_blank" rel="noopener noreferrer" className='footerTypo botonesTypo'>
                        <img className='icon' src="./assets/icons/facebook.png" alt="ícono de facebook" />
                        <span className='botonesTypo'>@sporehills</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Footer;            