import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addItem } = useCart();

    useEffect(() => {
        fetch(`/data/products.json`)
            .then((response) => response.json())
            .then((data) => {
                const selectedProduct = data.find((product) => product.id === parseInt(id));
                setProduct(selectedProduct);
            })
            .catch((error) => console.error('Error fetching product details:', error));
    }, [id]);

    const handleAddToCart = () => {
        if (product) {
            addItem(product);
            alert('Product added to cart!');
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductDetail;