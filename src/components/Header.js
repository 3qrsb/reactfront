import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext'; // Import the useCart hook
import { Search as SearchIcon } from 'react-feather'; // Import the Search icon

const Header = ({ handleSearch }) => {
    const { cart } = useCart(); // Destructure cart from the useCart hook
    const [searchTerm, setSearchTerm] = useState('');
    const cartItemsCount = cart.length;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Handle input change for the search bar
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        handleSearch(e.target.value);
    };

    return (
        <header className="bg-gray-800 text-white py-5">
            <div className="container mx-auto px-5">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-xl font-bold">
                        Home
                    </Link>
                    <div className="flex items-center">
                        <div className="flex items-center border border-gray-300 rounded-md px-3 py-1 bg-white">
                            <SearchIcon className="text-gray-600" /> {/* Search icon */}
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={handleInputChange}
                                className="bg-transparent ml-2 focus:outline-none rounded-md px-3 py-1 bg-white text-gray-800"
                            />
                        </div>
                    </div>
                    <nav>
                        <ul className="flex space-x-4">
                            <li className="relative">
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="hover:underline focus:outline-none"
                                >
                                    Products
                                    <span className="ml-1">&#9662;</span>
                                </button>
                                {isMenuOpen && (
                                    <div className="absolute bg-white shadow-lg mt-2 py-2 rounded-lg">
                                        <Link to="/products/smartphones" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Smartphones</Link>
                                        <Link to="/products/laptops-pcs" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Laptops, PCs</Link>
                                        <Link to="/products/tablets" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Tablets</Link>
                                        <Link to="/products/tv-audio-video" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">TV, Audio, Video</Link>
                                        <Link to="/products/accessories" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Accessories</Link>
                                    </div>
                                )}
                            </li>
                            <li>
                                <Link to="/about" className="hover:underline">About Us</Link>
                            </li>
                            <li>
                                <Link to="/cart" className="relative">
                                    Cart
                                    {cartItemsCount > 0 && (
                                        <span className="bg-red-500 text-white rounded-full px-2 py-1 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                                            {cartItemsCount}
                                        </span>
                                    )}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
