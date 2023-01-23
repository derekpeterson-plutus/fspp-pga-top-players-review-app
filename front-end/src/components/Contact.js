import React from 'react';

const Contact = () => {
  return (
    <div
      name='contact'
      className='h-screen w-full bg-[#d2d1d1] p-4 text-[#777777]'
    >
      <div className='flex flex-col p-4 justify-center align-middle max-w-screen-lg mt-4 h-full ml-auto mr-auto'>
        <div className='pb-8'>
          <p className='py-6'>Please fill in the form below</p>
        </div>
        <div className='flex justify-center items-center'>
          <form
            method='POST'
            className='flex flex-col w-full md:w-1/2'
            action='https://getform.io/f/56ddf23b-a66b-45b9-bba7-eedfb5fc0edc'
          >
            <input
              type='text'
              name='name'
              placeholder='Enter your name here'
              className='my-4 p-2 bg-transparent border-white border-2 rounded-md text-white focus:outline-none'
            />
            <input
              type='text'
              name='email'
              placeholder='Enter your email here'
              className='my-4 p-2 bg-transparent border-white border-2 rounded-md text-white focus:outline-none'
            />
            <textarea
              name='message'
              placeholder='Enter your message here'
              rows='10'
              className='my-4 p-2 bg-transparent border-white border-2 rounded-md text-white focus:outline-none'
            ></textarea>

            <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
              Share your thought here
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
