import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from "react-router-dom"
import { addItemToCart } from '../actions/cartActions'
import { getProducts } from '../actions/productActions';
import ClientCardProducts from './ClientCardProducts';
import { Container, Form, Modal, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';

const ClientListProducts = () => {
    const params= useParams();

    const dispatch = useDispatch();
    const { loading, products, error, productsCount } = useSelector(state => state.products);

    const [list, setList] = useState([]);
    const [updateList, setUpdateList] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [dataModal, setDataModal] = useState({ id:"", name: "", model: "", trademark: "",  price: "", image: "", cont: ""})

    const handleCloseModal = () => { setShowModal(false) }
    const handleOpenModal = () => { setShowModal(true) }

    const handleChangeModal = ({ target }) => {
        setDataModal({
            ...dataModal,
            [target.name]: target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("dataModal--->", dataModal)
        dispatch(addItemToCart(dataModal));
        Swal.fire(
            'Guardado!',
            `Producto agregado al carro!`,
            'success'
        )
        handleCloseModal();
        setUpdateList(!updateList)
        
    }

    useEffect(() => {
        if (error) {
            return alert.error(error)
        }

        dispatch(getProducts());
    }, [dispatch, error])


    return (
        <Container className="mb-5">

            <h1 className="text-center">Productos</h1>
            {loading ? "cargando..." : (
            <Row>
                {
                    products.map((product, index) => (
                        <ClientCardProducts
                            key={index}
                            producto={product}
                            setUpdateList={setUpdateList}
                            updateList={updateList}
                            handleCloseModal={handleCloseModal}
                            handleOpenModal={handleOpenModal}
                            setDataModal={setDataModal}
                        />
                    ))
                }
            </Row>
            )}

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header>
                    <Modal.Title>¿Desea agregar este producto a su carrito de compras?</Modal.Title>
                </Modal.Header>
                <Form
                    onSubmit={handleSubmit}
                >
                    <Modal.Body>

                        <Form.Group className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Nombre"
                                value={dataModal.name}
                                onChange={handleChangeModal}
                                required
                                disabled
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Modelo</Form.Label>
                            <Form.Control
                                type="text"
                                name="model"
                                placeholder="Modelo"
                                value={dataModal.model}
                                onChange={handleChangeModal}
                                required
                                disabled
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                placeholder="Precio"
                                value={dataModal.price}
                                onChange={handleChangeModal}
                                required
                                disabled
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Cantidad</Form.Label>
                            <Form.Control
                                type="number"
                                name="quantity"
                                placeholder="Cantidad"
                                value={dataModal.quantity}
                                onChange={handleChangeModal}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Ruta Imagen</Form.Label>
                            <Form.Control
                                type="text"
                                name="image"
                                placeholder="URL de la imagen"
                                value={dataModal.image}
                                onChange={handleChangeModal}
                                required
                                disabled
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Marca</Form.Label>
                            <Form.Control
                                type="text"
                                name="trademark"
                                placeholder="Fabricante"
                                value={dataModal.trademark}
                                onChange={handleChangeModal}
                                required
                                disabled
                            />
                        </Form.Group>





                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-secondary" type="reset" onClick={handleCloseModal}>
                            Cancelar
                        </button>
                        <button className="btn btn-success" type="submit">
                            Agregar
                        </button>
                    </Modal.Footer>
                </Form>
            </Modal>

        </Container>
    )
}

export default ClientListProducts