import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen text-black'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ml-30 mr-30'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-white'>
            About This Project
          </p>
        </div>

        <p className='text-xl mt-20 '>
          This is a full stack web development project built to track
          performance of the top 15 PGA players. The back-end is built with REST
          API and Express JS. The front-end is using ReactJS and TailwindCSS.
          Users are able to send the developer message to share their ideas and
          questions about this project.
        </p>
      </div>
    </div>
  );
};

export default About;
