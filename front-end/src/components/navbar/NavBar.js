import './Navbar.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { VscSearch } from 'react-icons/vsc';
//import SearchBar from '../searchBar/SearchBar';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';


const NavBar = ({showModal, setShowModal}) => {

  const [navbar, setNavbar] = useState(false);
  const [showSearchForm, setShowSearchForm] = useState(false);

  const links = [
    {
      id: 1,
      link: <Link to='/players'>Players</Link>,
    },
    {
      id: 2,
      link: <Link to='/players/new'>More</Link>,
    },
    {
      id: 3,
      link: <Link to='/videos'>Videos</Link>,
    },
    {
      id: 4,
      link: <Link to='/watch'>Watch</Link>,
    },
    {
      id: 5,
      link: <Link to='/shop'>Shop</Link>,
    },
    {
      id: 7,
      link: <Link to='/game'>Game</Link>,
    },
  ];

  const toggleSearchForm = () => {
    showSearchForm ? setShowSearchForm(false) : setShowSearchForm(true);
  };

  const toggleLoginModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <div className='navbar__left'>
          <div title='Home' className='navbar__left-logo'>
            <Link to='/'><img alt='logo' src={logo}/></Link>
          </div>
          <div
            onClick={() => setNavbar(!navbar)}
            className='cursor-pointer ml-2 pr-4 z-20 text-gray-300 md:hidden hover:text-white'
          >
            {navbar ? <FaTimes size={18} /> : <FaBars size={18} />}
          </div>
          {navbar && (
            <ul className='flex flex-col z-10 justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#062146] text-[rgb(186,185,185)]'>
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className='px-4 cursor-pointer uppercase py-6 text-2xl hover:text-white'
                >
                  <Link onClick={() => setNavbar(!navbar)} to={link}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <ul className='navbar__links'>
          {links.map(({ id, link }) => (
            <div
              id={id}
              key={id}
              className='navbar__link'
            >
              <li>{link}</li>
            </div>
          ))}
        </ul>
        <div className='navbar__right'>
          <div className='navbar__right-login' onClick={toggleLoginModal}>Log In</div>
          <div
            className={
              showSearchForm
                ? 'navbar__right-search navbar__right-search-active'
                : 'navbar__right-search'
            }
          >
            <FaSearch size={18} title='Search' onClick={toggleSearchForm}/>
            {showSearchForm && ( //<SearchBar />
              <div>
                <form className='navbar__right-search_form'>
                  <input
                    type='text'
                    placeholder='Search...'
                    className='navbar__right-search_input'
                  />
                  <button type='submit'>
                    <VscSearch />
                  </button>
                </form>
              </div> 
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
