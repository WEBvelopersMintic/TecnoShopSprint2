import axios from 'axios'
import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import Swal from 'sweetalert2'
import './styles/styles.css'

const ClientClientCardProducts = ({producto, setUpdateList, updateList, handleCloseModal, handleOpenModal, setDataModal}) => {

    const URL = "http://localhost:3004/productos"

    const handleDelete = async () => {

        Swal.fire({
            title: `Estás seguro de eliminar ${producto.reference} ?`,
            text: "Esta acción no se puede deshacer!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sí, Eliminarlo!'
            }).then((result) => {
                if (result.isConfirmed) {
                    
                    axios.delete(`${URL}/${producto.id}`).then((response) => {
                        if (response.status === 200) {
                            Swal.fire(
                                'Eliminado!',
                                `Se eliminó con éxito el registro ${producto.reference}!`,
                                'success'
                            )
                            setUpdateList(!updateList)
                        }else {
                            Swal.fire(
                                'Error!',
                                'Hubo un problema al elminar el registro!',
                                'error'
                            )
                        }
                    })
                }
            })
    }

    const handleEdit = () => {
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

                        <button className="btn btn-success me-4" onClick={handleEdit}>Agregar</button>
                        
                    </ListGroup>
                    
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default ClientClientCardProducts