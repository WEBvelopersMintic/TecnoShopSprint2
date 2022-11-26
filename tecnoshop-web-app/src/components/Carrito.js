import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, removeItemFromCart } from '../actions/cartActions'
import { Link, useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './styles/styles.css';
import Swal from 'sweetalert2';

const Carrito = () =>{
    const navigate=useNavigate()
    const dispatch= useDispatch();
    const {cartItems} = useSelector(state => state.cart)
    const {user} =useSelector(state => state.auth)
    const [listItems, setListItems] = useState([]);
    const [total, setTotal] = useState(0);
    
    console.log("cartItems--->", cartItems);

    const calcTotal = () => {
        return cartItems.reduce((sum, items) => {
            return sum + parseFloat(items.price);
        })
    }

    const finalizarCompra = async (e) => {
        e.preventDefault();
        const dateToday = new Date();
        const dataModal = {
            date: `${dateToday.getDay()}/${dateToday.getMonth()+1}/${dateToday.getFullYear()}`,
            total: total,

        }
        
        // if (response.status === 201) {
        //     Swal.fire(
        //         'Guardado!',
        //         `El registro ${response.data.IdVenta} ha sido guardado exitosamente!`,
        //         'success'
        //     )
        //     navigate("/");
        // } else {
        //     Swal.fire(
        //         'Error!',
        //         'Hubo un problema al crear el registro!',
        //         'error'
        //     )
        // }
    }
    return (
        <Container className="mb-5">
            <h1 className="text-center">Carrito de compras</h1>
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Imagen</th>
                        <th>Cantidad</th>
                        <th>Producto</th>
                        <th>Valor</th>
                        <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartItems && cartItems.map((item) => (
                                <tr>
                                <td><img src={item.imagen} width="100px" /></td>
                                <td>{item.quantity}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.price * item.quantity}</td>
                                </tr>
                            ))
                        }

<tr>
                        <td colSpan={4} className="total-carrito">Total Carrito</td>
                        <td>{calcTotal}</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" onClick={finalizarCompra}>Finalizar compra</Button>{' '}
                    <Button variant="danger">Cancelar</Button>{' '}
                </Col>
            </Row>
        </Container>
    );
}

export default Carrito;