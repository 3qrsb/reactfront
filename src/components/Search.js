import React, { useState } from 'react';
import { Search as SearchIcon } from 'react-feather'; // Import the Search icon

const Search = ({ handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        handleSearch(e.target.value);
    };

    return (
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-1 bg-white">
            <SearchIcon className="text-gray-600" /> {/* Search icon */}
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search..."
                className="bg-transparent ml-2 focus:outline-none rounded-md px-3 py-1 bg-white text-gray-800"
            />
        </div>
    );
};

export default Search;