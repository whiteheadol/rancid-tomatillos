import React from 'react';

const Movie = ({ poster, title, rating }) => {
  return (
    <div>
      <div className="movie-poster" src={poster}></div>
      <h2>{title}</h2>
      <p>{rating}</p>
    </div>
  )
};

export default Movie;
