import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <div>
      <ReactPlayer
        url='https://www.youtube.com/embed/Jqf9haCd6mM'
        width='640px'
        height='360px'
        playing={true}
        volume={0.5}
        controls={true}
        loop={true}
        modestbranding={true} 
        onPlay={() => console.log('El video ha comenzado a reproducirse')}
        onPause={() => console.log('El video se ha pausado')}
        onEnded={() => console.log('El video ha terminado')}
        onProgress={(progress) => console.log('Progreso del video:', progress)}
      />
    </div>
  );
}

export default VideoPlayer;
