import React from 'react';
import { Link } from 'react-router-dom';
import Error404 from '../assets/Error404.gif';

const ErrorPage = () => {
  return (
    <div class='bg-indigo-900 relative overflow-hidden h-screen'>
      <img
        alt='errorImg'
        src={Error404}
        class='absolute h-full w-full object-fill'
      />
      <div class='inset-0 bg-black opacity-25 absolute'></div>
      <div class='container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40'>
        <div class='w-full font-mono flex flex-col items-center relative z-10'>
          <p class='font-extrabold text-8xl my-44 text-white animate-bounce'>
            <Link to='/'>Golf Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
