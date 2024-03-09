"use client";
import { SearchManufacturer } from ".";
import {useState} from 'react';

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('')


    const handleSearch = () => {
        console.log('searching...')
    }
    return (
        <form className="search-bar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer 
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />
            </div>
        </form>
    );
};

export default SearchBar;