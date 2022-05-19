import React from 'react';
import Movie from '../Movie/Movie.js';
import './MoviesContainer.css';

const MoviesContainer = ({ movies, currentMovieHandler, error }) => {
  const movieThumbnails = movies.map(element => {
    return (
      <Movie
        poster={element.poster_path}
        title= {element.title}
        rating={element.average_rating}
        key={element.id}
        id={element.id}
        currentMovieHandler={currentMovieHandler}
        />
    )
  })

  return (
    <div className="movies-container">
      {error && <h3 className="load-error">Sorry, there was an error. Please try again later.</h3>}
      {movieThumbnails}
    </div>
  )
}

export default MoviesContainer;
