import axios from 'axios';
import './PlayersList.scss';
import loading from '../../assets/loading.gif';
import PlayerCard from '../playerCard/PlayerCard';
import React, { useState, useEffect } from 'react';

const API = process.env.REACT_APP_API_URL;

const PlayersList = () => {

  const [players, setPlayers] = useState([]);
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API}/players/`)
      .then((response) => {
        setPlayers(response.data.payload);
        setIsLoading(false);
      })
      .catch((error) => {
        setHasError(true)
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <img alt='loading' src={loading} style={{margin: '0 auto'}}/>
      </div>
    )
  };

  return (
    <div>
      <div className='players'>
        {hasError && <h1>Oop, error found!</h1>}
        {players.map((player, index) => {
          return <PlayerCard key={index} player={player} />;
        })}
      </div>
    </div>
  );
};

export default PlayersList;
