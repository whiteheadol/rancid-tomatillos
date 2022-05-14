import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({currentMovie, moviesContainerHandler}) => {
  return (
    <div className="movie-details">
      <div className="movie-backdrop"  style={{ backgroundImage: `url(${currentMovie.movie.backdrop_path})` }}>
        <div className="movie-text">
          <p className="title"><strong>{currentMovie.movie.title}: </strong>{currentMovie.movie.tagline}</p>
          <p>{currentMovie.movie.overview}</p>
          <p><strong>Rating: </strong>{currentMovie.movie.average_rating}</p>
          <p><strong>Release Date: </strong>{currentMovie.movie.release_date}</p>
          <p><strong>Genres: </strong>{currentMovie.movie.genres}</p>
          <p><strong>Budget: </strong>{currentMovie.movie.budget}</p>
          <p><strong>Revenue: </strong>{currentMovie.movie.revenue}</p>
          <p><strong>Runtime: </strong>{currentMovie.movie.runtime} min.</p>
        </div>
      </div>
      <button className="back-to-homepage" onClick={() => moviesContainerHandler()}><strong>Back to Home</strong></button>
    </div>
  )
};



export default MovieDetails
