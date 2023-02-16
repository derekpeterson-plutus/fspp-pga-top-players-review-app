import axios from 'axios';
import './PlayerDetail.scss';
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
    <div className='playerDetail'>
      <div className='playerDeail__container'>
        <div className='playerDetail__title'>{player.name}</div>
        <div className='playerDetail__left'>
          <div className='playerDetail__imageContainer'>
            <img
              alt={player.name}
              src={player.image}
              className='playerDetail__image'
            />
          </div>
        </div>
        <div className='playerDetail__info'>
          <div><span>Country: {player.country}</span></div>
          <div><span>Events Played: {player.events}</span></div>
          <div><span>Avg Points: {player.avg_points}</span></div>
          <div><span>Total Points: {player.total_points}</span></div>
          <div><span>Money Earned: {player.money_earned}</span></div>
          <div><span>Rank This Week: {player.rank_this_week}</span></div>
          <div><span>Rank Last Week: {player.rank_last_week}</span></div>
        </div>
        <div className='playerDetail__buttons'>
          <Link to={`/players/${id}/edit`}>
            <button className='playerDetail__button'>
              Edit
            </button>
          </Link>
          <button
            onClick={handleDelete}
            className='playerDetail__button'
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetail;
