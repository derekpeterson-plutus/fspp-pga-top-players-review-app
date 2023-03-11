import './Videos.scss';
import React from 'react';
//import video from '../../assets/video.mp4'
import VideoPlayer from '../videoPlayer/VideoPlayer';

const Videos = () => {
  return (
    <div className='videos'>
      <div className="videos__content">
        <div className='videos__title'>Videos</div>
        <div className='videos__container'>
          <VideoPlayer className='videos__video'/>
          <VideoPlayer className='videos__video'/>
          <VideoPlayer className='videos__video'/>
          <VideoPlayer className='videos__video'/>
          <VideoPlayer className='videos__video'/>
          <VideoPlayer className='videos__video'/>
          <VideoPlayer className='videos__video'/>
          <VideoPlayer className='videos__video'/>
          <VideoPlayer className='videos__video'/>
        </div>
      </div>
    </div>
  )
};

export default Videos;
