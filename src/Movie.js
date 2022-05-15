import React from 'react';
import './Movie.css';

const Movie = ({ poster, title, rating, currentMovieHandler, id }) => {
  return (
    <div className="movie-thumbnail" onClick={() => currentMovieHandler(id)} >
      <div className="movie-poster" style={{ backgroundImage: `url(${poster})` }}></div>
      <h2 className="movie-title">{title}</h2>
      <p className="movie-rating">Rating: {rating.toFixed(2)}</p>
    </div>
  )
};

export default Movie;
