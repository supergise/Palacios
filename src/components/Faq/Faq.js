import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './faq.css';

const Faq = () => {
    return (
        <section 
            id='preguntas' 
            className='container-fluid'>

            <h2 className='h1Regular bodyTypoGrey titleFaqs d-flex justify-content-center'>
                PREGUNTAS FRECUENTES
            </h2>
        
            <Accordion
                alwaysOpen='true'
            >
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>¿Quiénes pueden tomarla y quiénes no se recomienda? </Accordion.Header>
                    <Accordion.Body>
                        Pueden tomarlas adolescentes y adultos. No se recomienda que lo consuman: niños, las mujeres embarazadas, personas que hayan desarrallodo algún tipo de alergia hacia los hongos o que estén consumiendo algún tipo de medicación.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>¿Cuáles son las contraindicaciones de la melena de león?</Accordion.Header>
                    <Accordion.Body>
                        Hasta el momento no se han encontrado contraindicaciones sobre la melena de león, de todas formas se siguen desarroloando estudios para implementarlo de la forma más eficiente y de forma no perjudicial.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header> ¿Cómo y cuándo tomar las cápsulas?</Accordion.Header>
                    <Accordion.Body>
                        Se recomienda tomar dos cápsulas por día en la mañana o una por la mañana y otra por la noche.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>¿Cuántas cápsulas vienen por frasco?</Accordion.Header>
                    <Accordion.Body>
                        Por frasco vienen sesenta cápsulas.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                    <Accordion.Header>¿Cómo comprar?</Accordion.Header>
                    <Accordion.Body>
                        Puedes conseguir tu Melena de León en nuestra tienda de Instagram, comprándolo por mercadolibre o contactándonos al Whatsapp. Utilizamos Correo Andreani como medio de distribución de nuestros productos.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='5'>
                    <Accordion.Header>Luego de realizar la compra ¿Cuándo recibo mi pedido?</Accordion.Header>
                    <Accordion.Body>
                        Una vez realizado el pago, hay un lapso máximo de 7 días para que recibas el producto en tu domicilio o en la sucursal de correo más cercana.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

		</section>
    );
};

export default Faq;