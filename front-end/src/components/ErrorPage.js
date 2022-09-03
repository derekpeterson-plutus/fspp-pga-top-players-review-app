import React from 'react';
import { Link } from 'react-router-dom';
import errorpage from '../assets/errorpage.webp';

const ErrorPage = () => {
  return (
    <div class='bg-indigo-900 relative overflow-hidden h-screen'>
      <img
        alt='error__page'
        src={errorpage}
        class='absolute h-full w-full object-cover'
      />
      <div class='inset-0 bg-black opacity-25 absolute'></div>
      <div class='container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40'>
        <div class='w-full font-mono flex flex-col items-center relative z-10'>
          <p class='font-extrabold text-8xl my-44 text-white animate-bounce'>
            <Link to='/'>Back Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
