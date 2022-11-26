import React, {useEffect, useSelector} from 'react'
import store from "./store"
import ProtectedRoute from './routes/ProtectedRoute';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import { Register } from './components/user/Register';
import NewProduct from './components/NewProduct';
import ClientListProducts from './components/ClientListProducts';
import ListProducts from './components/ListProducts';
import Carrito from './components/Carrito';
import ListaVentas from './components/ListaVentas';
import { Login } from './components/user/Login';
import { loadUser } from './actions/userActions';

const App = () => {

    return (
        
        <Router>
            <div className='App'>
                <NavBar />
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route exact path="/admin/product" element={<ListProducts/>} />
                    <Route exact path="/admin/product" element={<ProtectedRoute isAdmin={true}><ListProducts/></ProtectedRoute>} />
                    <Route exact path="/create-product" element={<NewProduct/>} />                    
                    <Route exact path="/" element={<ClientListProducts/>} />
                    <Route exact path="/carrito" element={<Carrito/>} />
                    <Route exact path="/lista-ventas" element={<ListaVentas/>} />
                    
                </Routes>
            </div>
        </Router>
        
    )
}

export default App;