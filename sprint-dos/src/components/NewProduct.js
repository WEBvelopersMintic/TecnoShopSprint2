import axios from 'axios';
import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Swal from 'sweetalert2'

const NewProduct = () => {

    const [data, setData] = useState({ name: "", trademark: "", model: "", reference: "", price: "", image: "" })

    const handleChange = ({ target }) => {
        setData({
            ...data,
            [target.name]: target.value
        })
    }

    const URL = "http://localhost:3004/productos"

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(URL, data);
        if (response.status === 201) {
            Swal.fire(
                'Guardado!',
                `El registro ${response.data.reference} ha sido guardado exitosamente!`,
                'success'
            )

        } else {
            Swal.fire(
                'Error!',
                'Hubo un problema al crear el registro!',
                'error'
            )
        }
    }

    return (
        <Container>
            <div className='card'>
                <div className='card-header'>
                    <h1 className="text-center">Nuevo Producto</h1>
                </div>
            </div>
            <Form className='form-control' onSubmit={handleSubmit} >

                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="name"
                        value={data.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        name="reference"
                        placeholder="Referencia"
                        value={data.reference}
                        onChange={handleChange}
                        required
                    />

                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        name="model"
                        placeholder="Modelo"
                        value={data.model}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="number"
                        name="price"
                        placeholder="Precio"
                        value={data.price}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        name="image"
                        placeholder="URL de la imagen"
                        value={data.image}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <select
                        className="form-control"
                        name="trademark"
                        onChange={handleChange}
                        required
                    >
                        <option value="">Seleccione una opción</option>
                        <option value="YAMAHA">YAMAHA</option>
                        <option value="SUZUKI">SUZUKI</option>
                        <option value="HONDA">HONDA</option>
                    </select>
                </Form.Group>
                <button className="btn btn-success">Guardar</button>
            </Form>
        </Container>
    )
}

export default NewProduct;