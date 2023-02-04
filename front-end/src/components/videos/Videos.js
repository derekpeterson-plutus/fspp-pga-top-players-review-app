import './Videos.scss';
import React from 'react';
import bgImg2 from '../../assets/bgImg2.jpeg';

const Videos = () => {
  return (
    <div className='videos'>
      <div className='videos__container'>
        <img alt="bgImg" src={bgImg2}/>
      </div>
    </div>
  )
};

export default Videos;
