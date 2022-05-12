import React from 'react';
import './Movie.css';

const Movie = ({ poster, title, rating }) => {
  return (
    <div className="movie-thumbnail">
      <div className="movie-poster" style={{ backgroundImage: `url(${poster})` }}></div>
      <h2>{title}</h2>
      <p>{rating}</p>
    </div>
  )
};

export default Movie;
