import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({props}) => {
  return (
    <div className="movie-details">
      <p>{props.movie.title}</p>
      <p>{props.movie.overview}</p>
      <p>{props.movie.average_rating}</p>
      <p>{props.movie.release_date}</p>
      <p>{props.movie.genres}</p>
      <p>{props.movie.budget}</p>
      <p>{props.movie.revenue}</p>
      <p>{props.movie.runtime}</p>
      <p>{props.movie.tagline}</p>
      <button className="back-to-homepage"></button>
    </div>
  )
};



export default MovieDetails
