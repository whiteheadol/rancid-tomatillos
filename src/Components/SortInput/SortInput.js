import React, {Component} from 'react';
import './SortInput.css';

class SortInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }

  handleChange = event => {
    this.setState({ search: event.target.value })
    this.props.updateSearchedMovies(event.target.value)
  }

  clearSearch = event => {
    // this.setState({ search: 'any' })
    this.props.updateSearchedMovies('')
  }

  render() {
    return (
      <form className="form-layout">
        <input
        className="input-box"
        type="text"
        placeholder="search by name"
        name="search"
        className="search-input"
        value={this.state.search}
        onChange={event => this.handleChange(event)}
        />
        <button className="submit-btn" onClick={event => this.clearSearch(event)}>Clear Search</button>
      </form>
    )
  }
}

export default SortInput;
