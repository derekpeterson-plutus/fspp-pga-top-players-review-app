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
      <div className=' grid sm:grid-cols-3 md:grid-cols-4 sm:px-0 cursor-pointer text-white'>
        {players.map((player, index) => {
          return <Player key={index} player={player} />;
        })}
      </div>
    </div>
  );
};

export default Players;
