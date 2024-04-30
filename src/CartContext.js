import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            const newQuantity = updatedCart[existingItemIndex].quantity + 1;
            updatedCart[existingItemIndex].quantity = Math.min(newQuantity, 100);
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    const removeItem = (itemId) => {
        setCart(cart.filter((item) => item.id !== itemId));
    };

    const updateQuantity = (itemId, newQuantity) => {
        const updatedCart = cart.map((item) =>
            item.id === itemId ? { ...item, quantity: Math.min(newQuantity, 100) } : item
        );
        setCart(updatedCart);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
