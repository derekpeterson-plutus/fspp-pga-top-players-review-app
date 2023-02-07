import axios from 'axios';
import './PlayerNewForm.scss';
import React, { useState } from 'react';
import { MdDriveFolderUpload } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

const PlayerNewForm = () => {
  const navigate = useNavigate();

  const [file, setFile] = useState('');

  const [player, setPlayer] = useState({
    name: '',
    image: '',
    events: '',
    country: '',
    avg_points: '',
    is_favorite: '',
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
    <div className='new'>
      <section className='new__container'>
        <form>
          <div className='new__left'>
            <img
              alt='newImg'
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
            />
            <div className='new__upload'>
              <label htmlFor='file'>Upload Image: <MdDriveFolderUpload className='icon' /></label>
              <input
                id='file'
                type='file'
                style={{ display: 'none' }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
          </div>
          <div>
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
          </div>
          <div>
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
          <div>
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
            <div>
              <label htmlFor='is_favorite'>Is Favorite:</label>
              <input
                required
                type='text'
                id='is_favorite'
                value={player.is_favorite}
                onChange={handleTextChange}
              ></input>
            </div>
          </div>
        </form>
        <div className='new__buttons'>
          <button onClick={handleSubmit}>Submit</button>
          <button><Link to='/players'>Back</Link></button>
        </div>
      </section>
    </div>
  );
};

export default PlayerNewForm;
