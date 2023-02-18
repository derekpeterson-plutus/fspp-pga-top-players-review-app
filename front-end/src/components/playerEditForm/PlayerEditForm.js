import axios from 'axios';
import './PlayerEditForm.scss';
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
    <div className='editForm'>
      <div className='editForm__title'>Edit Player's Info</div>
      <form onSubmit={handleSubmit}>
        <div className='editForm__columns'>
          <div className='editForm__middle'>
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
          <div className='editForm__right'>
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
        <div className='editForm__upload'>
          <label htmlFor='image'>Image URL:</label>
          <input
            id='image'
            type='text'
            value={player.image}
            onChange={handleTextChange}
          />
        </div>
        <div className='editForm__button'>
          <input type='submit' className='border-none cursor-pointer hover:shadow-xl bg-[#1d87ff] text-white'/>
        </div>
      </form>
    </div>
  );
};

export default PlayerEditForm;
