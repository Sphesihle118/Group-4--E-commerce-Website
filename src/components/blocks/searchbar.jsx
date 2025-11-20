import React, { useState } from 'react';
import { productDetails} from "../../data/productDetails.js";


export const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit} className=" flex flex-col ">
            <label className="mb-1">
                Search Item
            </label>
            <input
                type="text"
                placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
                value={searchTerm}
                onChange={handleChange}
                className="flex-grow w-[250px] md:w-[507px] bg-white p-3  rounded-[13px] focus:outline-none focus:ring-2 focus:ring-black/30 inset-shadow-xs shadow-lg pl-5"
            />

        </form>
    );
};

