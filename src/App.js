import React, { Component } from 'react';
import movieData from './movieData.js';
import MoviesContainer from './MoviesContainer.js';
import MovieDetails from './MovieDetails.js'
import dummyData from './dummyData.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state ={
      movies: movieData.movies,
      currentMovie: '',
      moviesContainer: true,
      dummyData: dummyData
    }
  }

  moviesContainerHandler = () => {
    this.setState({ moviesContainer: !this.state.moviesContainer})
  }

  currentMovieHandler = () => {
    this.setState({ currentMovie: this.state.dummyData})
  }


  render() {
    return (
      <div className="App">
        <h1 className="page-header">Rancid Tomatillos</h1>
        { this.state.moviesContainer && <MoviesContainer movies={this.state.movies} moviesContainerHandler={this.moviesContainerHandler} currentMovieHandler={this.currentMovieHandler} /> }
        { !this.state.moviesContainer && <MovieDetails currentMovie={this.state.currentMovie} moviesContainerHandler={this.moviesContainerHandler} /> }
      </div>
    );
  }
}

export default App;
