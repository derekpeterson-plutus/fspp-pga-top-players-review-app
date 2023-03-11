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
          <VideoPlayer />
          <VideoPlayer />
          <VideoPlayer />
          <VideoPlayer />
          <VideoPlayer />
          <VideoPlayer />
          <VideoPlayer />
          <VideoPlayer />
          <VideoPlayer />

          {/* <div>
            <video src={video} width="750" height="500" controls></video>
          </div>
          <div>
            <video src={video} width="750" height="500" controls></video>
          </div>
          <div>
            <video src={video} width="750" height="500" controls></video>
          </div>
          <div>
            <video src={video} width="750" height="500" controls></video>
          </div> */}
        </div>
      </div>
    </div>
  )
};

export default Videos;
