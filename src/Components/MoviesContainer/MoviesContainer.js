import React from 'react';
import Movie from '../Movie/Movie.js';
import './MoviesContainer.css';
// import drowdown component

const MoviesContainer = ({ movies, searchBy, error }) => {
  let movieThumbnails;
  // const movieThumbnails = movies.map(element => {
  //   return (
  //     <Movie
  //       poster={element.poster_path}
  //       title= {element.title}
  //       rating={element.average_rating}
  //       key={element.id}
  //       id={element.id}
  //     />
  //   )
  // });

  if (searchBy === 'any') {
    movieThumbnails = movies.map(element => {
      return (
        <Movie
          poster={element.poster_path}
          title= {element.title}
          rating={element.average_rating}
          key={element.id}
          id={element.id}
        />
      )
    })
  } else {
    movieThumbnails = movies.map(element => {
      let newSearchBy = searchBy.toLowerCase();
      let newTitle = element.title.toLowerCase();
      if (newTitle.includes(`${newSearchBy}`)) {
        return (
          <Movie
            poster={element.poster_path}
            title= {element.title}
            rating={element.average_rating}
            key={element.id}
            id={element.id}
          />
        )
      }
    })
  }

  return (
    <div className="movies-container">
      {error && <h3 className="load-error">Sorry, there was an error. Please try again later.</h3>}
      {movieThumbnails}
    </div>
  )
}

export default MoviesContainer;
