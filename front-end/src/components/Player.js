import React from 'react';
import { Link } from 'react-router-dom';

const Player = ({ player }) => {
  return (
    <div name='player' className='text-white w-full h-screen'>
      <div className='max-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <img
          key={player.id}
          src={player.image}
          alt={player.name}
          className='rounded-lg'
        />
        <div>
          <button className='text-black font-bold hover:text-xl px-6 py-3 my-8 mx-auto items-center rounded-md duration-300'>
            <Link to={`/players/${player.id}`}>
              {' '}
              {player.name}'s Statistics{' '}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
