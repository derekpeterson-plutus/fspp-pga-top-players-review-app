import './Home.scss';
import axios from 'axios';
//import { FaPlus, FaMinus } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const API = process.env.REACT_APP_API_URL;

const Home = () => {
  const { id } = useParams();
  const [players, setPlayers] = useState([]);
  //const [showPlayerDetails, setShowPlayerDetails] = useState(false);

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

  // const togglePlayerDetails = () => {
  //   !showPlayerDetails
  //     ? setShowPlayerDetails(true)
  //     : setShowPlayerDetails(false);
  // };

  return (
    // <div className='homePlayers'>
    //   <div className='homePlayers__container'>
    //     {players.map((player, id) => {
    //       return (
            {/* <div key={id} className='homePlayers__details'>
              <Link key={id} to={`/players/${player.id}`}>
                <img alt={player.name} src={player.image} title={player.name} />
              </Link> 
              <div className='homePlayers__playerInfo'>
                <div className='text-xl font-bold'>{player.name}</div>
                <div className='homePlayers__player-country'>
                  Country: <span>{player.country}</span>
                </div>
                <div>Ranking: {player.rank_this_week}</div>
              </div>
              <div className='homePlayers__toggleDetails'>
                {!showPlayerDetails && (
                  <FaPlus
                    fontSize='inherit'
                    title='Show More'
                    onClick={togglePlayerDetails}
                  />
                )}
                {showPlayerDetails && (
                  <FaMinus
                    fontSize='inherit'
                    title='Show Less'
                    onClick={togglePlayerDetails}
                  />
                )}
              </div>
            </div> */},
    <div className='home'>
      <div className='home__left'>
        <div className='home__hero'>
          <img alt='' src="https://www.golfchannel.com/sites/default/files/2023/01/28/homa_1920_farmers23_D4_trophy.jpg"/>
          <span className='home__leftInfo'>Hope springs Max Homa to new heights at Torrey Pines</span>
        </div>
  
      </div>
     
    </div>
  //         );
  //       })}
  //     </div>
  //   </div>
 );
};

export default Home;
