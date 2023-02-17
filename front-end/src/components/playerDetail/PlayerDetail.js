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
      <div className='playerDetail__wrapper'>
        <div className='playerDetail__imageContainer'>
          <img
            alt={player.name}
            src={player.image}
            className='playerDetail__image'
          />
        </div>
        <div className='playerDetail__info'>
          <div className='playerDetail__title'>
            <div>
              {player.name}
            </div>
            <div className='playerDetail__country'>
              <img alt={player.country} src={`/flags/${player.country}.svg`}/>
              <p>{player.country}</p>
            </div>
          <div className='playerDetail__statistic'>
            <div>World Ranking: <span title="Ranking">{player.rank_this_week}</span></div>
            <div>Events Played: <span title='Events'>{player.events}</span></div>
            <div>Average Points: <span title='Avg. Points'>{player.avg_points}</span></div>
            <div>Total Points: <span title='Total Points'>{player.total_points}</span></div>
            <div>Official Money: <span title='Official Money'>{player.money_earned}</span></div>
          </div>
          </div>
        </div>
        <div className='playerDetail__buttons'>  
          <div className='playerDetail__editButton'>
            <Link to={`/players/${id}/edit`}>
              <button>
                Edit
              </button>
            </Link>
          </div>
          <div className='playerDetail__deleteButton'>  
            <button
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetail;
