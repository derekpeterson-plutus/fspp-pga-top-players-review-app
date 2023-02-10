import React from 'react';
import './PlayerCard.scss';
import { Link } from 'react-router-dom';

const PlayerCard = ({ player }) => {

  return (
    <div className='player'>
      <div className='player__container'>
        <div className='player__info'>
          <Link to={`/players/${player.id}`}>
            <img alt={player.name} src={player.image} title={player.name} />
          </Link>
          <div className='player__details'>
            <div className='text-lg font-bold'>{player.name}</div>
            <div className='player__country'>
              Country: <span>{player.country}</span>
            </div>
            <div>Ranking: {player.rank_this_week}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
