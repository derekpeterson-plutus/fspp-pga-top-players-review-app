import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
    return (
        <ReactPlayer
            controls
            width={300}
            height={165}
            url='https://www.youtube.com/watch?v=8upZm_-PbaI'
            //url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        />
    )
};

export default VideoPlayer;