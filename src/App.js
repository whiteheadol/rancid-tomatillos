import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useParams
} from "react-router-dom";
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
      });

      console.log('State:', this.state)
  }



  moviesContainerHandler = () => {
    this.setState({ moviesContainer: !this.state.moviesContainer})
    this.setState({ error: false })
  }

  // I think this funciton is redundant, consider removing later
  currentMovieHandler = (id) => {
    const newMovie = this.state.movies.find(movie => movie.id === id);
    this.findFullMovie(id);
  }

  reassignCurrentMovie = (mov) => {
    this.setState({ currentMovie: mov})
  }

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
      this.setState({ moviesContainer: false })
    });
  };

  findFullMovie = (id) => {
    this.getPromise(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(data => data.movie)
      .then(movie => this.setState({ currentMovie: movie }))
      .then(resolution => {
        this.setState({ error: false })
        this.moviesContainerHandler();
      })
  }

  render() {
    return (
      <Router>
       <div className="App">
        <h1 className="page-header">Rancid Tomatillos</h1>
        <Routes>
          <Route  path="/" element={<MoviesContainer movies={this.state.movies} currentMovieHandler={this.currentMovieHandler} error={this.state.error} />}/>
        </Routes>
        <Routes>
            <Route exact path="/:id" element={<MovieDetails currentMovie={this.state.currentMovie} moviesContainerHandler= {this.moviesContainerHandler} error={this.state.error}/>}
            render={({match}) => {
              const movieToRender = this.state.movies.find(movie => movie.id === parseInt(match.params.id))
              return <MovieDetails {...movieToRender} />
            }}
             />
        </Routes>

       </div>
     </Router>
    //  <Router>
    //   <div className="App">
    //     { this.state.moviesContainer && <MoviesContainer movies={this.state.movies} currentMovieHandler={this.currentMovieHandler} error={this.state.error} /> }
    //     { (!this.state.moviesContainer) && <MovieDetails currentMovie={this.state.currentMovie} moviesContainerHandler={this.moviesContainerHandler} error={this.state.error} /> }
    //   </div>
    // </Router>
    );
  }
}

export default App;
