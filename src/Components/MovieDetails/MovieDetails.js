import React, { Component } from 'react';
import './MovieDetails.css';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state ={
      currentMovie: {},
      error: false
    }
  }

  componentDidMount = () => {
      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.currentId}`)
        .then(response => {
          if (response.ok) {
            return response.json()
          } else {
            throw Error(response.statusText);
          }
        })
        .then(data => data.movie)
        .then(movie => this.setState({ currentMovie: movie }))
        .catch((error) => {
          this.setState({ error: true })
        })
    }

  render() {
    return (
          <div className="movie-details">
          {!this.state.error &&
            <div className="movie-backdrop"  style={{ backgroundImage: `url(${this.state.currentMovie.backdrop_path})` }}>
              <div className="movie-text">
                  <p className="title"><strong>{this.state.currentMovie.title}: </strong>{this.state.currentMovie.tagline}</p>
                  <p>{this.state.currentMovie.overview}</p>
                  <p><strong>Rating: </strong>{this.state.currentMovie.average_rating}</p>
                  <p><strong>Release Date: </strong>{this.state.currentMovie.release_date}</p>
                  <p><strong>Genres: </strong>{this.state.currentMovie.genres}</p>
                  <p><strong>Budget: </strong>{this.state.currentMovie.budget}</p>
                  <p><strong>Revenue: </strong>{this.state.currentMovie.revenue}</p>
                  <p><strong>Runtime: </strong>{this.state.currentMovie.runtime} min.</p>
              </div>
            </div>
          }
          {this.state.error && <h3 className="load-error">Sorry, there was an error. Please try again later.</h3>}
            <Link to={`/`}><button className="back-to-homepage" ><strong>Back to Home</strong></button></Link>
          </div>
    )
  }


}

export default MovieDetails;
