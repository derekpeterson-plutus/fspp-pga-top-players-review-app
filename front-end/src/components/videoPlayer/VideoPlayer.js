import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
    return (
        <ReactPlayer
            controls
            width={300}
            height={165}
            //url='https://www.youtube.com/watch?v=8upZm_-PbaI'
            //url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            url='https://www.pgatour.com/video/competition/6322686406112/ryan-brehm-makes-196-yard-ace-on-no-17-at-valspar'
        />
    )
};

export default VideoPlayer;