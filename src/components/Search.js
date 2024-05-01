import React, { useState } from 'react';

const Search = ({ handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        handleSearch(e.target.value); // Call the handleSearch function with the new search term
    };

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search..."
                className="border border-gray-300 rounded-md px-3 py-1 bg-gray-800 text-white"
            />
        </div>
    );
};

export default Search;