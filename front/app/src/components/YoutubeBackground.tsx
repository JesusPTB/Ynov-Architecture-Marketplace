import React from 'react';
import YouTube from 'react-youtube';


class YoutubeBackgroundProps {
    videoId: string = '';
}

const YouTubeBackground: React.FC<YoutubeBackgroundProps> = ({ videoId }) => {
    const opts = {
        playerVars: {
            autoplay: 1,
            controls: 1 ,
            modestbranding: 1,
            loop: 1,
            playlist: videoId,
            showInfo: 0
        },
    };

    return (
        <YouTube
            videoId={videoId}
            opts={opts}
            className="absolute inset-0 w-full h-full object-cover"
        />
    );
};

export default YouTubeBackground;
