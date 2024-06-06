import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {

  const movies = useSelector(store => store.movies);

  if(!movies) return null;
  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
      <div>
        <MovieList title={"Recommended Movies"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
