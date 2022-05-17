import React, { Component } from 'react';
import MoviesContainer from './MoviesContainer.js';
import MovieDetails from './MovieDetails.js'
import './App.css';
import { Route } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state ={
      movies: [],
      currentMovie: '',
      error: false
    }
  }

  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`)
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json()
        } else {
          throw Error(response.statusText);
        }
      })
      .then(data => this.setState({ movies: data.movies }))
      .catch((error) => {
        console.log('error')
        this.setState({ error: true })
      })
  }

  currentMovieHandler = (id) => {
    const newMovie = this.state.movies.find(movie => movie.id === id);
    this.findFullMovie(id);
  }

  // I think this funciton is redundant, consider removing later
  // reassignCurrentMovie = (mov) => {
  //   this.setState({ currentMovie: mov})
  // }

  getPromise = (url) => {
    return fetch(url)
    .then(response => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json()
      } else {
        throw Error(response.statusText);
      }
    })
    .catch((error) => {
      console.log('error')
      this.setState({ error: true })
    });
  };

  findFullMovie = (id) => {
    this.getPromise(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(data => data.movie)
      .then(movie => this.setState({ currentMovie: movie }))
      .then(resolution => {
        this.setState({ error: false })
      })
  }

  render() {
    return (
      <div className="App">
        <h1 className="page-header">Rancid Tomatillos</h1>
        <Route exact path='/' render={ () => <MoviesContainer movies={this.state.movies} currentMovieHandler={this.currentMovieHandler} error={this.state.error} /> } />
        <Route
          exact path='/:id'
          render={({match}) => {
            this.findFullMovie(parseInt(match.params.id))
            return <MovieDetails currentMovie={this.state.currentMovie} error={this.state.error} />
          } }
        />
      </div>
    );
  }
}

export default App;
