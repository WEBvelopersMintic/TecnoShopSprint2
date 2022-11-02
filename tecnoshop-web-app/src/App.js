import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import NewProduct from './components/NewProduct';
import ClientListProducts from './components/ClientListProducts';
import ListProducts from './components/ListProducts';



const App = () => {
    return (
        
        <Router>
            <div className='App'>
                <NavBar />
                <Routes>
                    
                    <Route exact path="/product" element={<ListProducts/>} />
                    <Route exact path="/create-product" element={<NewProduct/>} />                    
                    <Route exact path="/" element={<ClientListProducts/>} />
                    
                </Routes>
            </div>
        </Router>
        
    )
}

export default App;