import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

const PlayerDetail = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  const [player, setPlayer] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/players/${id}`)
      .then((res) => {
        setPlayer(res.data.payload);
      })
      .catch((error) => console.log(error.message));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`${API}/players/${id}`)
      .then(() => navigate('/players'))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className='player__detail'>
      <div className='player__img'>
        <img
          className='rounded-lg w-1/2'
          src={player.image}
          alt={player.name}
        />
      </div>

      <div>
        <h4>Player's Statistic</h4>
      </div>
      <p>Name: {player.name}</p>
      <p>Country: {player.country}</p>
      <p>Events Played: {player.events}</p>
      <p>Avg Points: {player.avg_points}</p>
      <p>Total Points: {player.total_points}</p>
      <p>Money Earned: {player.money_earned}</p>
      <p>Rank This Week: {player.rank_this_week}</p>
      <p>Rank Last Week: {player.rank_last_week}</p>
      <p>Is Favorite: {player.is_favorite ? '❤️' : '👎'}</p>
      <div>
        <Link to='/players'>
          <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
            {' '}
            Go Back{' '}
          </button>
        </Link>
        <Link to={`/players/${id}/edit`}>
          <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
            Edit
          </button>
        </Link>
        <button
          onClick={handleDelete}
          className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PlayerDetail;
