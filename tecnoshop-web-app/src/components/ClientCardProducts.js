//import axios from 'axios'
import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams} from "react-router-dom"
import { addItemToCart } from '../actions/cartActions'
import Swal from 'sweetalert2'
import './styles/styles.css'

const ClientCardProducts = ({producto, setUpdateList, updateList, handleCloseModal, handleOpenModal, setDataModal}) => {
    const params= useParams();
    const { loading, error, product } = useSelector(state => state.productDetails)
    const { user } = useSelector(state => state.auth)

    const handleAdd = () => {
        handleOpenModal();
        setDataModal(producto)
    }

    return (
        <div className="col-4 mb-3">
            <Card>
                <Card.Title className="text-center">{producto.name}</Card.Title>
                <img src={producto.imagen.url} alt={producto.name} className="card-img-top image-card" />
                <Card.Body>
                    <ListGroup className="mb-2">
                        <ListGroupItem><strong>MARCA: </strong>{producto.name}</ListGroupItem>                        
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