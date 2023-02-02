import axios from 'axios';
import './PlayersList.scss';
import PlayerCard from '../playerCard/PlayerCard';
import React, { useState, useEffect } from 'react';

const API = process.env.REACT_APP_API_URL;

const PlayersList = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/players/`)
      .then((response) => {
        setPlayers(response.data.payload);
      })
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <div>
      <div className='players'>
        {players.map((player, index) => {
          return <PlayerCard key={index} player={player} />;
        })}
      </div>
    </div>
  );
};

export default PlayersList;
