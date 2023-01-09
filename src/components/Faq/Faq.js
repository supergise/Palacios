
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './faq.css';

const Faq = () => {
    return (
        <section className='section-faq'>

            <div className='container'>

                <div className='row'>
                    <h1 className='title-faq'>
                        PREGUNTAS FRECUENTES
                    </h1>
                </div>

                <div className='row accordion-faq'>
                    <div className='flush'>
                        <Accordion
                            defaultActiveKey='0'
                            alwaysOpen='true'
                        >
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header>¿Quienes pueden tomarla y quienes no se recomienda? </Accordion.Header>
                                <Accordion.Body>
                                    Pueden tomarlas adolecentes y adultos, no se recomienda que lo consuman: niños, las mujeres embarazas, personas que hayan desarrallodo algun tipo de alergia hacia los hongos o que esten consumiendo algun tipo de medicacion.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='1'>
                                <Accordion.Header>¿Cuales son las Contraindicaciones de la melena de leon?</Accordion.Header>
                                <Accordion.Body>
                                    Hasta el momento no se han encontrado contraindicaciones sobre la melena de leon, de todas formas se siguen desarralloando estudios para implementarlo de la forma mas eficiente de forma no perjudicial.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='2'>
                                <Accordion.Header> ¿Cómo y cuando tomar las cápsulas?</Accordion.Header>
                                <Accordion.Body>
                                    Se recomienda tomar dos capsulas por dia en la mañana o una por la mañana y otra por la noche
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='3'>
                                <Accordion.Header>¿Cuántas Cápsulas vienen por frasco?</Accordion.Header>
                                <Accordion.Body>
                                    Por frasco vienen 60 comprimidos
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='4'>
                                <Accordion.Header>¿Cómo comprar?</Accordion.Header>
                                <Accordion.Body>
                                    Puedes conseguir tu Melena de Leon en nuestra tienda de Instagram comprandolo por mercadolibre o contactandonos al Whatsapp, Utilizamos Correo Andreani como medio de distribucion de nuestros productos.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='5'>
                                <Accordion.Header>Luego de realizar la compra ¿Cuándo recibo mi pedido?</Accordion.Header>
                                <Accordion.Body>
                                    Una vez realizado el pago, hay un lapso maximo de 7 dias para que recibas el producto en tu domicilio o en la sucursal de correo mas cercana.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>

		</section>
    );
};

export default Faq;
