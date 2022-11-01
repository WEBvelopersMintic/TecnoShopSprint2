import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ClientCardProducts from './ClientCardProducts';
import { Container, Form, Modal, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';

const ClientListProducts = () => {

    const URL = "http://localhost:3004/productos"

    const getData = async () => {
        const response = axios.get(URL);
        return response;
    }

    const [list, setList] = useState([]);
    const [updateList, setUpdateList] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [dataModal, setDataModal] = useState({})

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
        const response = await axios.put(`${URL}/${dataModal.id}`, dataModal)
        if (response.status === 200) {
            Swal.fire(
                'Agregado!',
                `El registro ${response.data.name} ha sido agregado exitosamente!`,
                'success'
            )
            handleCloseModal();
            setUpdateList(!updateList)
        } else {
            Swal.fire(
                'Error!',
                'Hubo un problema al agregar el producto!',
                'error'
            )
        }
    }

    useEffect(() => {
        //UseEffect' Body
        getData().then((response) => {
            setList(response.data);
        })
    }, [updateList])


    return (
        <Container className="mb-5">
            <Row>
                {
                    list.map((producto, index) => (
                        <ClientCardProducts
                            key={index}
                            producto={producto}
                            setUpdateList={setUpdateList}
                            updateList={updateList}
                            handleCloseModal={handleCloseModal}
                            handleOpenModal={handleOpenModal}
                            setDataModal={setDataModal}
                        />
                    ))
                }
            </Row>

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



                        <Form.Group className="mb-3">
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control
                                type="text"
                                name="reference"
                                placeholder="Referencia"
                                value={dataModal.reference}
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
                            Guardar
                        </button>
                    </Modal.Footer>
                </Form>
            </Modal>

        </Container>
    )
}

export default ClientListProducts