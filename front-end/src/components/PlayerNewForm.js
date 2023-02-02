import axios from 'axios';
import './PlayerNewForm.scss';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

const PlayerNewForm = () => {
  const navigate = useNavigate();

  const [player, setPlayer] = useState({
    name: '',
    rank_this_week: '',
    rank_last_week: '',
    country: '',
    events: '',
    avg_points: '',
    total_points: '',
    money_earned: '',
    is_favorite: '',
    image: '',
  });

  const addNewPlayer = (player) => {
    axios
      .post(`${API}/players`, player)
      .then(() => {
        navigate(`/players`);
      })
      .catch((error) => console.error(error.message));
  };

  const handleTextChange = (event) => {
    setPlayer({ ...player, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewPlayer(player);
  };

  return (
    <section className='newForm'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Player's Name:</label>
          <input
            id='name'
            value={player.name}
            type='text'
            onChange={handleTextChange}
            className='my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none'
            required
          ></input>
        </div>
        <div>
          <label htmlFor='country'>Country:</label>
          <input
            id='country'
            value={player.country}
            type='text'
            onChange={handleTextChange}
            className='my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none'
            required
          ></input>
        </div>
        <div>
          <label htmlFor='events'>Events:</label>
          <input
            id='events'
            value={player.events}
            type='number'
            onChange={handleTextChange}
            className='my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none'
            required
          ></input>
        </div>
        <div>
          <label htmlFor='rank'>Rank This Week:</label>
          <input
            id='rank_this_week'
            value={player.rank_this_week}
            type='number'
            onChange={handleTextChange}
            className='my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none'
            required
          ></input>
        </div>
        <div>
          <label htmlFor='rank'>Rank Last Week:</label>
          <input
            id='rank_last_week'
            value={player.rank_last_week}
            type='number'
            onChange={handleTextChange}
            className='my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none'
            required
          ></input>
        </div>
        <div>
          <label htmlFor='avg_points'>Avg Points:</label>
          <input
            id='avg_points'
            value={player.avg_points}
            type='number'
            onChange={handleTextChange}
            className='my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none'
            required
          ></input>
        </div>
        <div>
          <label htmlFor='total_points'>Total Points:</label>
          <input
            id='total_points'
            value={player.total_points}
            type='number'
            onChange={handleTextChange}
            className='my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none'
            required
          ></input>
        </div>
        <div>
          <label htmlFor='money_earned'>Money Earned:</label>
          <input
            id='money_earned'
            value={player.money_earned}
            type='text'
            onChange={handleTextChange}
            className='my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none'
            required
          ></input>
        </div>
        <div>
          <label htmlFor='is_favorite'>Is Favorite:</label>
          <input
            id='is_favorite'
            value={player.is_favorite}
            type='text'
            onChange={handleTextChange}
            className='my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none'
            required
          ></input>
        </div>
        <div>
          <label htmlFor='image'>Image URL:</label>
          <input
            id='image'
            value={player.image}
            type='text'
            onChange={handleTextChange}
            className='my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none'
            required
          ></input>
        </div>
        <input
          type='submit'
          className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'
        />
      </form>

      <Link to='/players'>
        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
          Go Back
        </button>
      </Link>
    </section>
  );
};

export default PlayerNewForm;
