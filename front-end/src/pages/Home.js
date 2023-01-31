import './Home.scss';
import React from 'react';
//import axios from 'axios';
//import { FaPlus, FaMinus } from 'react-icons/fa';
//import { Link, useParams } from 'react-router-dom';
//import React, { useState, useEffect } from 'react';

//const API = process.env.REACT_APP_API_URL;

const Home = () => {
  //These code blocks below is for the old version of the homepage

  // const { id } = useParams();
  // const [players, setPlayers] = useState([]);
  //const [showPlayerDetails, setShowPlayerDetails] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get(`${API}/players`)
  //     .then((response) => {
  //       setPlayers(response.data.payload);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [id]);

  // const togglePlayerDetails = () => {
  //   !showPlayerDetails
  //     ? setShowPlayerDetails(true)
  //     : setShowPlayerDetails(false);
  // };

  // return (
  //   <div className='homePlayers'>
  //     <div className='homePlayers__container'>
  //       {players.map((player, id) => {
  //         return (
  //           <div key={id} className='homePlayers__details'>
  //             <Link key={id} to={`/players/${player.id}`}>
  //               <img alt={player.name} src={player.image} title={player.name} />
  //             </Link> 
  //             <div className='homePlayers__playerInfo'>
  //               <div className='text-xl font-bold'>{player.name}</div>
  //               <div className='homePlayers__player-country'>
  //                 Country: <span>{player.country}</span>
  //               </div>
  //               <div>Ranking: {player.rank_this_week}</div>
  //             </div>
  //             <div className='homePlayers__toggleDetails'>
  //               {!showPlayerDetails && (
  //                 <FaPlus
  //                   fontSize='inherit'
  //                   title='Show More'
  //                   onClick={togglePlayerDetails}
  //                 />
  //               )}
  //               {showPlayerDetails && (
  //                 <FaMinus
  //                   fontSize='inherit'
  //                   title='Show Less'
  //                   onClick={togglePlayerDetails}
  //                 />
  //               )}
  //             </div>
  //           </div> 
  //         )
  //       })}
  //     </div>
  //   </div>
  // );

  //This return block is for the new version of the homepage
  return (
    <div className='home'>
      <div className='home__left'>
        <img 
          alt='heroImg' 
          className='home__heroImg' 
          src="https://www.golfchannel.com/sites/default/files/2023/01/28/homa_1920_farmers23_D4_trophy.jpg"/>
        <span className='home__leftInfo'>Hope springs Max Homa to new heights at Torrey Pines</span>
      </div>
      <div className='home__right'>
      <div className='home__rightTop'>
        <img 
          alt="rightImg" 
          className='home__rightTopImg' 
          src='https://sportshub.cbsistatic.com/i/r/2023/01/30/46e46950-c350-4b26-a39b-b2aae0022e26/thumbnail/770x433/1cbed752b9bb56282ae97b5ad737650c/rory-mcilroy-2023-dubai.jpg' />
          <span className='home__rightTopInfo'>McIlroy wins Hero Dubai Desert Classic</span>
      </div>
      <div className='home__rightBottom'>
        <img 
          alt="rightImg" 
          className='home__rightBottomImg' 
          src='https://golf.com/wp-content/uploads/2023/01/GettyImages-1246186721.jpg?width=1568&height=882' />
          <span className='home__rightBottomInfo'>Jordan Spieth enters LIV Golf joke chat</span>
      </div>
      </div>
    </div>
  );

};

export default Home;
