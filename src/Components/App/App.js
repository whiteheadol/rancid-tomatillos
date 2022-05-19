import React, { Component } from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer.js';
import MovieDetails from '../MovieDetails/MovieDetails.js';
import './App.css';
import { Route } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state ={
      movies: [],
      error: false
    }
  }

  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`)
      .then(response => {
        if (response.ok) {
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

  render() {
    return (
      <div className="App">
        <h1 className="page-header">Rancid Tomatillos</h1>
        <Route exact path='/' render={ () => <MoviesContainer movies={this.state.movies} error={this.state.error} /> } />
        <Route
          exact path='/:id'
          render={({match}) => {
            return <MovieDetails currentId={match.params.id} />
          } }
        />
      </div>
    );
  }
}

export default App;
