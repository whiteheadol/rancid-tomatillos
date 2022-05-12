import React, { Component } from 'react';
import movieData from './movieData.js';
import MoviesContainer from './MoviesContainer.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state ={
      movies: movieData.movies
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Rancid Tomatillos</h1>
        <MoviesContainer movies={this.state.movies} />
      </div>
    );
  }
}

export default App;

// Next steps:
// Fix homepage styling
// Round ratings if wanted
