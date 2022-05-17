import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({currentMovie, error}) => {
  return (
    <div className="movie-details">
      <div className="movie-backdrop"  style={{ backgroundImage: `url(${currentMovie.backdrop_path})` }}>
      {error && <h3 className="load-error">Sorry, there was an error. Please try again later.</h3>}
      {!error &&
        <div className="movie-text">
            <p className="title"><strong>{currentMovie.title}: </strong>{currentMovie.tagline}</p>
            <p>{currentMovie.overview}</p>
            <p><strong>Rating: </strong>{currentMovie.average_rating}</p>
            <p><strong>Release Date: </strong>{currentMovie.release_date}</p>
            <p><strong>Genres: </strong>{currentMovie.genres}</p>
            <p><strong>Budget: </strong>{currentMovie.budget}</p>
            <p><strong>Revenue: </strong>{currentMovie.revenue}</p>
            <p><strong>Runtime: </strong>{currentMovie.runtime} min.</p>
        </div>
      }
      </div>
    </div>
  )
};

// <button className="back-to-homepage" onClick={() => moviesContainerHandler()}><strong>Back to Home</strong></button>




export default MovieDetails
