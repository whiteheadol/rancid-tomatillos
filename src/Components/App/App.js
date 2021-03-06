import React, { Component } from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer.js';
import MovieDetails from '../MovieDetails/MovieDetails.js';
import SortInput from '../SortInput/SortInput.js';
import './App.css';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state ={
      movies: [],
      error: false,
      searchBy: 'any'
    }
  }

  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`)
      .then(response => {
        if (response.ok) {
          this.setState({ error: false })
          return response.json()
        } else {
          throw Error(response.statusText);
        }
      })
      .then(data => this.setState({ movies: data.movies }))
      .catch((error) => {
        this.setState({ error: true })
      })
  }

  updateSearchedMovies = (input) => {
    this.setState({ searchBy: input })
  }

  clearSearch = () => {
    this.setState({ searchBy: 'any' });
  }

  render() {
    return (
      <div className="App">
        <h1 className="page-header">Rancid Tomatillos</h1>
        <Switch>
          <Route exact path="/" render={ () => {
            return <div className="main-page">
              <SortInput updateSearchedMovies={this.updateSearchedMovies} />
              <MoviesContainer movies={this.state.movies} error={this.state.error} searchBy={this.state.searchBy} />
            </div>
          }}
          />
          <Route
            exact path="/:id"
            render={({match}) => {
              return <MovieDetails currentId={match.params.id} clearSearch={this.clearSearch} />
            } } />
        </Switch>
      </div>
    );
  }
}

export default App;
