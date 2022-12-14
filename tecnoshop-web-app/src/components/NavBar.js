import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/"> TecnoShop </Navbar.Brand>
                
                <Nav className="me-auto">
                    <Link to="/admin/product" className="nav-link"> Administrar Productos </Link>
                    <Link to="/create-product" className="nav-link"> Ingresar Productos </Link>
                    <Link to="/" className="nav-link"> Lista de Productos </Link>  
                    <Link to="/carrito" className="nav-link"> Carrito </Link>    
                    <Link to="/lista-ventas" className="nav-link"> Lista de ventas </Link>           
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;
