// import logo from './logo.svg';
import React, { Component } from 'react';
import movieData from './movieData.js';
import './App.css';

class App extends Component {
  // console.log(movieData.movies)
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
        <MoviesContainer />
      </div>
    );
  }
}

export default App;

// Set up basic App structure
// Find a place to store movieData (state)

// Make components (MoviesContainer & Movie)
// Pass down movieData information



//   render() {
//     return (
//       <main className='App'>
//         <h1>IdeaBox</h1>
//         <Form addIdea={this.addIdea} />
//         {!this.state.ideas.length && <h2>No ideas yet -- add some!</h2> }
//         <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea}/>
//       </main>
//     )
//   }
// }
