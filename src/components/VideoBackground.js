import React from 'react';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {

  useMovieTrailer(movieId);

  return (
    <div className='w-screen'>
      <iframe className='w-screen aspect-video' src="https://www.youtube.com/embed/S3XjsSvwSuU?si=W2r0To-W1Y-gkm3n &autoplay=1&mute=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
};

export default VideoBackground;

