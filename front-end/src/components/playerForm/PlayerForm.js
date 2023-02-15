import axios from 'axios';
import './PlayerForm.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

const PlayerForm = () => {
  const navigate = useNavigate();

  const [player, setPlayer] = useState({
    name: '',
    image: '',
    events: '',
    country: '',
    avg_points: '',
    money_earned: '',
    total_points: '',
    rank_last_week: '',
    rank_this_week: '',
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
    <div className='playerForm'>
      <div className='playerForm__title'>Add New Player</div>
      <form onSubmit={handleSubmit}>
        <div className='playerForm__columns'>
          <div className='playerForm__middle'>
            <div>
              <label htmlFor='name'>Player's Name:</label>
              <input
                id='name'
                required
                type='text'
                value={player.name}
                onChange={handleTextChange}
              ></input>
            </div>
            <div>
              <label htmlFor='country'>Country:</label>
              <input
                required
                type='text'
                id='country'
                value={player.country}
                onChange={handleTextChange}
              ></input>
            </div>
            <div>
              <label htmlFor='events'>Events:</label> 
              <input
                required
                id='events'
                type='number'
                value={player.events}
                onChange={handleTextChange}
              ></input>
            </div>
            <div>
              <label htmlFor='avg_points'>Avg Points:</label>
              <input
                required
                type='number'
                id='avg_points'
                value={player.avg_points}
                onChange={handleTextChange}
              ></input>
            </div>
          </div>
          <div className='playerForm__right'>
            <div>
              <label htmlFor='rank'>Rank This Week:</label>
              <input
                required
                type='number'
                id='rank_this_week'
                onChange={handleTextChange}
                value={player.rank_this_week}
              ></input>
            </div>
            <div>
              <label htmlFor='rank'>Rank Last Week:</label>
              <input
                required
                type='number'
                id='rank_last_week'
                onChange={handleTextChange}
                value={player.rank_last_week}
              ></input>
            </div>
            <div>
              <label htmlFor='total_points'>Total Points:</label>
              <input
                required
                type='number'
                id='total_points'
                value={player.total_points}
                onChange={handleTextChange}
              ></input>
            </div>
            <div>
              <label htmlFor='money_earned'>Money Earned:</label>
              <input
                required
                type='text'
                id='money_earned'
                value={player.money_earned}
                onChange={handleTextChange}
              ></input>
            </div>
          </div>
        </div>
        <div className='playerForm__upload'>
          <label htmlFor='image'>Image URL:</label>
          <input
            id='image'
            type='text'
            value={player.image}
            onChange={handleTextChange}
          />
        </div>
        <div className='playerForm__button'>
          <input type='submit' className='border-none cursor-pointer hover:shadow-xl bg-[#1d87ff] text-white'/>
        </div>
      </form>
    </div>
  );
};

export default PlayerForm;
