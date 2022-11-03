import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './styles/styles.css';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const Carrito = () =>{
    let navigate = useNavigate();
    const URL = "http://localhost:3004/items";
    const [listItems, setListItems] = useState([]);
    const [total, setTotal] = useState(0);
    

    const getData = async () => {
        const response = axios.get(URL);
        return response;
    }

    const URLI = "http://localhost:3004/ventas"

    const finalizarCompra = async (e) => {
        e.preventDefault();
        const dateToday = new Date();
        const dataModal = {
            date: `${dateToday.getDay()}/${dateToday.getMonth()+1}/${dateToday.getFullYear()}`,
            total: total,

        }
        const response = await axios.post(URLI, dataModal)
        if (response.status === 201) {
            Swal.fire(
                'Guardado!',
                `El registro ${response.data.IdVenta} ha sido guardado exitosamente!`,
                'success'
            )
            navigate("/");
        } else {
            Swal.fire(
                'Error!',
                'Hubo un problema al crear el registro!',
                'error'
            )
        }
    }

    

    useEffect(() => {
        //UseEffect' Body
        getData().then((response) => {
            setListItems(response.data);
            setTotal(response.data.reduce((sum, items) => {
                return sum + parseFloat(items.price);
            }, 0));
        })
    }, [])
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
                            listItems && listItems.map((item) => (
                                <tr>
                                <td><img src={item.image} width="100px" /></td>
                                <td>{item.cont}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.price * item.cont}</td>
                                </tr>
                            ))
                        }

<tr>
                        <td colSpan={4} className="total-carrito">Total Carrito</td>
                        <td>{total}</td>
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