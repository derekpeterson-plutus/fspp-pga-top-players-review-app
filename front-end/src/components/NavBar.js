import './Navbar.scss';
import Login from './Login';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { VscSearch } from 'react-icons/vsc';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';


const NavBar = () => {

  const [nav, setNav] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSearchForm, setShowSearchForm] = useState(false);

  const links = [
    {
      id: 1,
      link: <Link to='/'>Home</Link>,
    },
    {
      id: 2,
      link: <Link to='/players'>Players</Link>,
    },
    {
      id: 3,
      link: <Link to='/players/new'>More</Link>,
    },
    {
      id: 4,
      link: <Link to='/videos'>Videos</Link>,
    },
    {
      id: 5,
      link: <Link to='/watch'>Watch</Link>,
    },
    // {
    //   id: 6,
    //   link: <Link to='/about'>About</Link>,
    // },
    // {
    //   id: 7,
    //   link: <Link to='/contact'>Contact</Link>,
    // },
  ];

  const toggleSearchForm = () => {
    showSearchForm ? setShowSearchForm(false) : setShowSearchForm(true);
  };

  const toggleLoginModal = () => {
    setShowLoginModal((showLoginModal) => setShowLoginModal(!showLoginModal));
  };

  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <div className='navbar__left'>
          <div title='Home' className='navbar__left-logo'>
            <Link to='/'>🏌️</Link>
          </div>
          <div
            onClick={() => setNav(!nav)}
            className='cursor-pointer ml-2 pr-4 z-10 text-gray-300 md:hidden hover:text-white'
          >
            {nav ? <FaTimes size={18} /> : <FaBars size={18} />}
          </div>
          {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#062146] text-[rgb(186,185,185)]'>
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className='px-4 cursor-pointer uppercase py-6 text-2xl hover:text-white'
                >
                  <Link onClick={() => setNav(!nav)} to={link}>
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
          {/* <div className='navbar__right-tours'>
            <Link to='/tours'>Tours</Link>
          </div> */}
          <div className='navbar__right-login' onClick={toggleLoginModal}>
            {!showLoginModal ? (
              <Link to='/login'>
                <Login />
              </Link>
            ) : (
              'Login'
            )}
          </div>
          <div
            onClick={toggleSearchForm}
            className={
              showSearchForm
                ? 'navbar__right-search navbar__right-search-active'
                : 'navbar__right-search'
            }
          >
            <FaSearch size={13} title='Search' />
            {showSearchForm ? (
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
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
