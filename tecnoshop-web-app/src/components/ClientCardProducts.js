//import axios from 'axios'
import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
//import Swal from 'sweetalert2'
import './styles/styles.css'

const ClientCardProducts = ({producto, setUpdateList, updateList, handleCloseModal, handleOpenModal, setDataModal}) => {

    const handleAdd = () => {
        handleOpenModal();
        setDataModal(producto)
    }

    return (
        <div className="col-4 mb-3">
            <Card>
                <Card.Title className="text-center">{producto.name}</Card.Title>
                <img src={producto.image} alt={producto.name} className="card-img-top image-card" />
                <Card.Body>
                    <ListGroup className="mb-2">
                    <ListGroupItem><strong>MARCA: </strong>{producto.trademark}</ListGroupItem>                        
                        <ListGroupItem><strong>MODELO: </strong>{producto.model}</ListGroupItem>
                        <ListGroupItem><strong>CARASTERISTICAS: </strong>{producto.reference}</ListGroupItem>
                        <ListGroupItem><strong>PRECIO: </strong>{producto.price}</ListGroupItem>
                        
                        <button className="btn btn-success me-4" onClick={handleAdd}>Agregar</button>
                        
                    </ListGroup>
                    
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default ClientCardProducts