import './SearchBar.scss';
import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className='searchBar'>
      <input 
        type="text" 
        value={searchTerm}
        className='searchBar__input' 
        placeholder='Search by name'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
};

export default SearchBar;