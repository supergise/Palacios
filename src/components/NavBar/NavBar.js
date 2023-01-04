import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navBar.css';

function NavBar() {
    return (
    <>
        <Navbar bg="light" variant="light">
        <Container>
            <Navbar.Brand href="#home">
            <img
            src="./logo.png" //cambiar el logo
            className="d-inline-block align-top logo"
            alt=""
            />
                Eduardo Palacios
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#inicio">Inicio</Nav.Link>
                <Nav.Link href="#productos">Productos</Nav.Link>
                <Nav.Link href="#beneficios">Beneficios</Nav.Link>
                <Nav.Link href="#quienes-somos">Quiénes somos</Nav.Link>
                <Nav.Link href="#preguntas">Preguntas frecuentes</Nav.Link>
                <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
    </>
    );
}

export default NavBar;