import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navBar.css';

function NavBar() {
    return (
            <Navbar bg="light" expand="lg" className='fixed-top'>
            <Container fluid> 
                <Navbar.Brand href="#inicio">      
                <img
                src="./assets/logo.png" 
                className="d-inline-block align-center logo"
                alt="Spore Hills logo"
                />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>

                    <Nav className="ml-auto">
                        <Nav.Link className='botonesTypo' href="#inicio">INICIO</Nav.Link>
                        <Nav.Link className='botonesTypo' href="#productos">PRODUCTOS</Nav.Link>
                        <Nav.Link className='botonesTypo' href="#beneficios">BENEFICIOS</Nav.Link>
                        <Nav.Link className='botonesTypo' href="#nosotros">NOSOTROS</Nav.Link>
                        <Nav.Link className='botonesTypo' href="#preguntas">PREGUNTAS</Nav.Link>
                        <Nav.Link className='botonesTypo' href="#contacto">CONTACTO</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
                
            </Container>
            </Navbar>
    );
}   

export default NavBar;