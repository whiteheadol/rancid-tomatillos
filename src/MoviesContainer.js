import React from 'react';
import Movie from './Movie.js';
import './MoviesContainer.css';

const MoviesContainer = ({ movies, moviesContainerHandler, currentMovieHandler }) => {
  const movieThumbnails = movies.map(element => {
    return (
      <Movie
        poster={element.poster_path}
        title= {element.title}
        rating={element.average_rating}
        key={element.id}
        moviesContainerHandler={moviesContainerHandler}
        currentMovieHandler={currentMovieHandler}
        />
    )
  })

  return (
    <div className="movies-container">
      {movieThumbnails}
    </div>
  )
}

export default MoviesContainer;
