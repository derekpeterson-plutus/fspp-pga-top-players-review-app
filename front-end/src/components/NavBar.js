import './Navbar.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: <Link to='/'>home</Link>,
    },
    {
      id: 2,
      link: <Link to='/players'>players</Link>,
    },
    {
      id: 3,
      link: <Link to='/players/new'>Add Player</Link>,
    },
    {
      id: 4,
      link: <Link to='/about'>about</Link>,
    },
    {
      id: 5,
      link: <Link to='/contact'>contact</Link>,
    },
  ];

  return (
    <div className='navbar'>
      <div className='navbar__left'>
        <h1 className='navbar__logo'>
          <Link to='/players'>🏌️</Link>
        </h1>
      </div>

      <ul className='navbar__links'>
        {links.map(({ id, link }) => (
          <li key={id} className='navbar__link'>
            {link}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-10 text-gray-300 md:hidden hover:text-white'
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#062146] text-[#bab9b9]'>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className='px-4 cursor-pointer capitalize py-6 text-2xl hover:text-white'
            >
              <Link onClick={() => setNav(!nav)} to={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div className='navbar__right'>
        <p>Login</p>
        <FaSearch size={16} />
      </div>
    </div>
  );
};

export default NavBar;
