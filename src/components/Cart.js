import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

const Cart = () => {
    const { cart, removeItem, updateQuantity } = useCart();

    const handleQuantityChange = (itemId, newQuantity) => {
        const quantity = Math.max(1, newQuantity); // Ensure quantity is at least 1
        updateQuantity(itemId, quantity);
    };

    const handleRemoveItem = (itemId) => {
        removeItem(itemId);
    };

    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const total = subtotal;

    const isEmpty = cart.length === 0;

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            {isEmpty ? (
                <div className="text-center">
                    <img src="/images/empty_cart.png" alt="Empty Cart" className="mx-auto mb-4" />
                    <p className="mb-4 text-lg">There is nothing in the cart yet.</p>
                    <p className="mb-4">You can start your selection from the main page, look at promotions, or use the search if you are looking for something specific.</p>
                    <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Select Products
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cart.map((item) => (
                        <div key={item.id} className="bg-white p-4 shadow-md rounded-md">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <button
                                    onClick={() => handleRemoveItem(item.id)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Remove
                                </button>
                            </div>
                            <p className="text-gray-500">{item.description}</p>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center">
                                    <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                                    <div className="flex items-center ml-2">
                                        <button
                                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                            className="text-gray-600 focus:outline-none focus:text-gray-800"
                                        >
                                            &#9666;
                                        </button>
                                        <input
                                            type="number"
                                            id={`quantity-${item.id}`}
                                            value={item.quantity}
                                            readOnly
                                            className="w-12 text-center border border-gray-300 rounded-md"
                                        />
                                        <button
                                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                            className="text-gray-600 focus:outline-none focus:text-gray-800"
                                        >
                                            &#9656;
                                        </button>
                                    </div>
                                </div>
                                <p className="text-lg font-semibold">${item.price * item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {!isEmpty && (
                <div className="mt-8">
                    <p className="text-lg font-semibold">Subtotal: ${subtotal}</p>
                    <p className="text-lg font-semibold">Total: ${total}</p>
                </div>
            )}
        </div>
    );
};

export default Cart;
