import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Listado from './components/Listado';
import NewProduct from './components/NewProduct';
import ClientListProducts from './components/ClientListProducts';
//import Productos from './components/productos';


const App = () => {
    return (

        <Router>
            <div className='App'>
                <NavBar />
                <Routes>
                    <Route exact path="/product" element={<Listado/>} />
                    <Route exact path="/create-product" element={<NewProduct/>} />
                    <Route exact path="/" element={<ClientListProducts/>} />
                </Routes>
            </div>
        </Router>


    )
}

export default App;