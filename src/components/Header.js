import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import { Search as SearchIcon, ShoppingCart, Headphones } from 'react-feather'; // Import the SearchIcon and ShoppingCart icons
import { Menu } from '@headlessui/react'; // Import the Menu component
import { ChevronDownIcon } from '@heroicons/react/20/solid'; // Import the ChevronDown icon

const Header = ({ handleSearch }) => {
    const { cart } = useCart(); // Destructure cart from the useCart hook
    const [searchTerm, setSearchTerm] = useState('');
    const cartItemsCount = cart.length;

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
                                <Menu as="div" className="relative inline-block text-left">
                                    <Menu.Button className="hover:underline focus:outline-none">
                                        Products <ChevronDownIcon className="h-5 w-5 inline-block" />
                                    </Menu.Button>
                                    <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="px-1 py-1 ">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="/products/smartphones"
                                                        className={`${
                                                            active
                                                                ? 'bg-gray-100 text-gray-900'
                                                                : 'text-gray-700'
                                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>

                                                        Smartphones
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="/products/laptops-pcs"
                                                        className={`${
                                                            active
                                                                ? 'bg-gray-100 text-gray-900'
                                                                : 'text-gray-700'
                                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
</svg>

                                                        Laptops, PCs
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="/products/tablets"
                                                        className={`${
                                                            active
                                                                ? 'bg-gray-100 text-gray-900'
                                                                : 'text-gray-700'
                                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>

                                                        Tablets
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="/products/tv-audio-video"
                                                        className={`${
                                                            active
                                                                ? 'bg-gray-100 text-gray-900'
                                                                : 'text-gray-700'
                                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                                    >
                                                        <Headphones size={24} />
                                                        TV, Audio, Video
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            {/* Add more Menu.Items for other categories as needed */}
                                        </div>
                                    </Menu.Items>
                                </Menu>
                            </li>
                            <li>
                                <Link to="/about" className="hover:underline">About Us</Link>
                            </li>
                            <li>
                                <Link to="/profile" className="hover:underline">Profile</Link> {/* Add link to profile */}
                            </li>
                            <li>
                                <Link to="/cart" className="relative">
                                    <ShoppingCart size={24} />
                                    {cartItemsCount > 0 && (
                                        <span className="bg-red-500 text-white rounded-full px-2 py-1 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-xs">
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