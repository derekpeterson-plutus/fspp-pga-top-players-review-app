import './SearchBar.scss';
import React from 'react';
import { VscSearch } from 'react-icons/vsc';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    // <div className='searchBar'>
    //   <input 
    //     type="text" 
    //     value={searchTerm}
    //     className='searchBar__input' 
    //     placeholder='Search by name'
    //     onChange={(e) => setSearchTerm(e.target.value)}
    //   />
    // </div>
    <div className='searchBar'>
      <form className='searchBar__form'>
        <input
          type='text'
          value={searchTerm}
          placeholder='Search...'
          className='searchBar__input'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type='submit'>
          <VscSearch />
        </button>
      </form>
    </div>
  )
};

export default SearchBar;