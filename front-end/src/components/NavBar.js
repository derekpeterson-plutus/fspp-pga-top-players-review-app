import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

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
    <div className='flex justify-between items-center w-full h-20 text-gray-800 sticky top-0 z-50 bg-gradient-to-b from-cyan-500 to-blue-500'>
      <div>
        <h1 className='text-3xl ml-2 cursor-pointer'>
          <Link to='/players'>🏌️ Top PGA Here ⛳️</Link>
        </h1>
      </div>
      <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className='text-2xl px-5 cursor-pointer capitalize font-xl font-bold hover:text-black hover:scale-125 duration-200'
          >
            {link}
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-10 hover:scale-125 text-gray-300 md:hidden hover:text-white'
      >
        {nav ? <FaTimes size={40} /> : <FaBars size={40} />}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-cyan-600 bg-blue-600 text-gray-200 hover:font-bold hover:text-white'>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-125'
            >
              <Link onClick={() => setNav(!nav)} to={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
