import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './styles/styles.css';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const ListaVentas = () =>{
    const URL = "http://localhost:3004/ventas";
    const [listVentas, setListVentas] = useState([]);
    const [total, setTotal] = useState(0);

    const getData = async () => {
        const response = axios.get(URL);
        return response;
    }

    useEffect(() => {
        //UseEffect' Body
        getData().then((response) => {
            setListVentas(response.data);
            setTotal(response.data.reduce((sum, items) => {
                return sum + parseFloat(items.total);
            }, 0));
        })
    }, [])
    return(
        <Container>
            <h1 className="text-center">Lista de ventas</h1>
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Fecha</th>
                        <th>Id venta</th>
                        <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listVentas && listVentas.map((item) => (
                                <tr>
                                <td>{item.date}</td>
                                <td>{item.id}</td>
                                <td>{item.total}</td>
                                </tr>
                            ))
                        }

                        <tr>
                        <td colSpan={2} className="total-carrito">Total Ventas</td>
                        <td>{total}</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}

export default ListaVentas;