import React from 'react';
import { Container } from 'react-bootstrap';
import ListProducts from './ListProducts';


const listado = () => {
    return (
        <Container fluid>
            <h1 className="text-center">Listado de Productos</h1>
            <ListProducts />
        </Container>
    )
}

export default listado;