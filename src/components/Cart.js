import React from 'react';
import { useCart } from '../CartContext';

const Cart = () => {
    const { cart, removeItem } = useCart();

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            <p>{item.name}</p>
                            <p>Price: ${item.price}</p>
                            <button onClick={() => removeItem(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;