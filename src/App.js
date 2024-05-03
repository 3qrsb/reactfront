import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import { CartProvider } from './CartContext';
import AboutUs from './components/AboutUs';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <Router>
            <CartProvider>
                <div>
                    <Header handleSearch={handleSearch} />
                    <Routes>
                        <Route path="/" element={<ProductList searchTerm={searchTerm} />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>
            </CartProvider>
        </Router>
    );
};

export default App;