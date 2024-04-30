import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import { CartProvider } from './CartContext';

const App = () => {
    return (
        <Router>
            <CartProvider>
                <div>
                    <Header />
                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
            </CartProvider>
        </Router>
    );
};

export default App;