import axios from 'axios';
import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Swal from 'sweetalert2'

const NewProduct = () => {

    //const history = useHistory();

    const [data, setData] = useState({ name: "", model: "", trademark: "",  price: "", image: "", reference: ""})

    const handleChange = ({ target }) => {
        setData({
            ...data,
            [target.name]: target.value
        })
    }

    const URL = "http://localhost:3000/productos"

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(URL, data);
        if (response.status === 201) {
            Swal.fire(
                'Guardado!',
                `El registro ${response.data.name} ha sido guardado exitosamente!`,
                'success'
            )

           // history.push('/')

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
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        value={data.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Modelo</Form.Label>
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
                    <Form.Label>Marca</Form.Label>
                    <Form.Control 
                                type="text"
                                name="trademark"
                                placeholder="Fabricante"
                                value={data.trademark}
                                onChange={handleChange}
                                required
                            />                    
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Precio</Form.Label>
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
                    <Form.Label>Ruta Imagen</Form.Label>
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
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control
                        type="text"
                        name="reference"
                        placeholder="Carasteristicas"
                        value={data.reference}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>        
                
                <button className="btn btn-success">Guardar</button>
                
            </Form>
        </Container>
    )
}

export default NewProduct;