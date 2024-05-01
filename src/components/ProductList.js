import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ searchTerm }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetch('/data/products.json')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    useEffect(() => {
        setFilteredProducts(
            products.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, products]);

    return (
        <div className="container mx-auto py-4">
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.map((product) => (
                    <li key={product.id} className="border p-4 rounded-lg">
                        <Link to={`/product/${product.id}`} className="hover:underline">
                            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                        </Link>
                        <p className="mb-2">{product.description}</p>
                        <p className="text-gray-700">Price: ${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
