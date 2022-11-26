import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newProduct, clearErrors } from '../actions/productActions'
import { Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { NEW_PRODUCT_RESET } from '../constants/productConstants'

const NewProduct = () => {

    const dispatch = useDispatch();
    const navigate= useNavigate()
    const [imagen, setImagen]= useState()
    const [vendedor, setVendedor] = useState('');
    const [data, setData] = useState({ name: "", model: "", trademark: "",  price: "", image: "", reference: ""})
    const { loading, error, success } = useSelector(state => state.newProduct);

    useEffect(() => {

        if (error) {
            Swal.fire(
                'Error!',
                'Hubo un problema al crear el registro!',
                'error'
            )
            dispatch(clearErrors())
        }

        if (success) {
            Swal.fire(
                'Guardado!',
                `El registro ${data.name} ha sido guardado exitosamente!`,
                'success'
            )
            navigate('/dashboard');
            dispatch({ type: NEW_PRODUCT_RESET })
        }

    }, [dispatch, alert, error, success])

    const handleChange = ({ target }) => {
       
        if (target.name === "image"){
            const reader = new FileReader();

            reader.onload=()=>{
                if (reader.readyState ===2){
                    setImagen(reader.result)
                }
            }
            reader.readAsDataURL(target.files[0])
        }
        else{
            setData({
                ...data,
                [target.name]: target.value
            })
        }
    }

    const URL = "http://localhost:4000/productos"

    const handleSubmit = async (e) => {
        e.preventDefault();

        const productNew = {
            name: data.name,
            model: data.model,
            reference: data.reference,
            trademark: data.trademark,
            price: data.price,
            imagen: imagen,
            vendedor, vendedor
        }

        dispatch(newProduct(productNew))
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
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control
                        type="file"
                        name="image"
                        placeholder="Subir imagen"
                        accept="images/*"
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
                <Form.Group className="mb-3">
                    <Form.Label>Vendedor</Form.Label>
                    <Form.Control
                        type="text"
                        name="vendedor"
                        placeholder="vendedor"
                        value={vendedor}
                        onChange={(e) => setVendedor(e.target.value)}
                        required
                    />
                </Form.Group>        
                
                <button className="btn btn-success">Guardar</button>
                
            </Form>
        </Container>
    )
}

export default NewProduct;