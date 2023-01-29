import './Players.scss';
import axios from 'axios';
import Player from './Player';
import React, { useState, useEffect } from 'react';

const API = process.env.REACT_APP_API_URL;

const Players = () => {
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
          return (
            <div className='players__container'>

          <Player key={index} player={player} />
            </div>
          )  
        })}
      </div>
    </div>
  );
};

export default Players;
