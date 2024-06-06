import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_LOGO } from '../utils/constants';

const GptSearch = () => {
  return (
    <>
    <div className='absolute -z-10'>
      <img className='' src={BG_LOGO} alt="Logo"></img>
    </div>
    <div className='pt-[30%] md:p-0'>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
    </>
  );
};

export default GptSearch;
