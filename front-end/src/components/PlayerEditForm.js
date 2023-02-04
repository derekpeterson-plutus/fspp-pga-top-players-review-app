import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

const PlayerEditForm = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [player, setPlayer] = useState({
    name: '',
    image: '',
    events: '',
    country: '',
    avg_points: '',
    is_favorite: '',
    total_points: '',
    money_earned: '',
    rank_last_week: '',
    rank_this_week: '',
  });

  const updatePlayer = (player) => {
    axios
      .put(`${API}/players/${id}`, player)
      .then(() => navigate(`/players`))
      .catch((error) => console.error(error.message));
  };

  useEffect(() => {
    axios
      .get(`${API}/players/${id}`)
      .then((response) => setPlayer(response.data.payload))
      .catch((error) => console.log(error));
  }, [id]);

  const handleTextChange = (event) => {
    setPlayer({ ...player, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updatePlayer(player);
  };

  return (
    <div className='edit__form'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Player Name:</label>
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
          <label htmlFor='image'>Image URL:</label>
          <input
            id='image'
            type='text'
            value={player.image}
            onChange={handleTextChange}
            className='my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none'
            required
          ></input>
        </div>
        <div>
          <label htmlFor='country'>Country:</label>
          <input
            id='country'
            type='text'
            value={player.country}
            onChange={handleTextChange}
            className='my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none'
            required
          ></input>
        </div>
        <div>
          <label htmlFor='rank_this_week'>Rank This Week:</label>
          <input
            id='rank_this_week'
            type='number'
            value={player.rank_this_week}
            onChange={handleTextChange}
            className='my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none'
            required
          ></input>
        </div>
        <div>
          <label htmlFor='rank_last_week'>Rank Last Week:</label>
          <input
            id='rank_last_week'
            type='number'
            value={player.rank_last_week}
            onChange={handleTextChange}
            className='my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none'
            required
          ></input>
        </div>
        <div>
          <label htmlFor='protein'>Events:</label>
          <input
            id='events'
            type='number'
            value={player.events}
            onChange={handleTextChange}
            className='my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none'
            required
          ></input>
        </div>
        <div>
          <label htmlFor='avg_points'>Average Points:</label>
          <input
            id='avg_points'
            type='number'
            value={player.avg_points}
            onChange={handleTextChange}
            className='my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none'
            required
          ></input>
        </div>
        <div>
          <label htmlFor='total_points'>Total Points:</label>
          <input
            id='total_points'
            type='number'
            value={player.total_points}
            onChange={handleTextChange}
            className='my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none'
            required
          ></input>
        </div>
        <div>
          <label htmlFor='avg_points'>Is Favorite:</label>
          <input
            id='is_favorite'
            type='boolean'
            value={player.is_favorite}
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
          {' '}
          Go Back{' '}
        </button>
      </Link>
    </div>
  );
};

export default PlayerEditForm;
