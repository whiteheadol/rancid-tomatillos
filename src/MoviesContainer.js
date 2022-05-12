import React from 'react';
import Movie from './Movie.js';

const MoviesContainer = ({ movies }) => {
  const movieThumbnails = movies.map(element => {
    return (
      <Movie
        poster={element.poster_path}
        title= {element.title}
        rating={element.average_rating}
        key={element.id} />
    )
  })

  return (
    <div>
      {movieThumbnails}
    </div>
  )
}

export default MoviesContainer;
