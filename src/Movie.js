import React from 'react';
import './Movie.css';
import { NavLink } from 'react-router-dom';


const Movie = ({ poster, title, rating, currentMovieHandler, id, findFullMovie }) => {
  return (
    <div className="movie-thumbnail" >
      <NavLink to={`/${id}`} className="nav-link"><div className="movie-poster" style={{ backgroundImage: `url(${poster})` }}></div></NavLink>
      <h2 className="movie-title">{title}</h2>
      <p className="movie-rating">Rating: {rating.toFixed(2)}</p>
    </div>
  )
};

export default Movie;
