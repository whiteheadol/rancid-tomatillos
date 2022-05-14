import React, { Component } from 'react';
import MoviesContainer from './MoviesContainer.js';
import MovieDetails from './MovieDetails.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state ={
      movies: [],
      currentMovie: '',
      moviesContainer: true,
    }
  }

  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`)
    .then(response => response.json())
    .then(data => this.setState({ movies: data.movies }))
  }

  moviesContainerHandler = () => {
    this.setState({ moviesContainer: !this.state.moviesContainer})
  }

  currentMovieHandler = (id) => {
    const newMovie = this.state.movies.find(movie => movie.id === id);
    this.findFullMovie(id);
  }

  reassignCurrentMovie = (mov) => {
    this.setState({ currentMovie: mov})
  }


  getPromise = (url) => {
    return fetch(url)
    .then(response => response.json())
    .catch(err => {
      console.log('error')
      // loadError.innerText = 'we\'re so sorry - there was an error loading your data, please try again later';
    });
  };

  findFullMovie = (id) => {
    this.getPromise(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(data => data.movie)
      .then(movie => this.setState({ currentMovie: movie }))
      .then(resolution => {
        this.moviesContainerHandler();
      })
  }

  render() {
    return (
      <div className="App">
        <h1 className="page-header">Rancid Tomatillos</h1>
        { this.state.moviesContainer && <MoviesContainer movies={this.state.movies} currentMovieHandler={this.currentMovieHandler} /> }
        { (!this.state.moviesContainer) && <MovieDetails currentMovie={this.state.currentMovie} moviesContainerHandler={this.moviesContainerHandler} /> }
      </div>
    );
  }
}

export default App;
