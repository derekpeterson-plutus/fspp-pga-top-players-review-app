import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const API = process.env.REACT_APP_API_URL;

const Home = () => {
  let { id } = useParams();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/players`)
      .then((response) => {
        setPlayers(response.data.payload);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2 sm:px-0 cursor-pointer ml-10 mb-10 mt-10 mr-10'>
        {players.map((player, id) => {
          return (
            <Link key={id} to={`/players/${player.id}`}>
              <img
                alt={player.name}
                src={player.image}
                className='w-60 h-40 rounded-md'
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
