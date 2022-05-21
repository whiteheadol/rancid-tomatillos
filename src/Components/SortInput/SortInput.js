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


  render() {
    return (
      <form className="form-layout">
        <label className="input-label">
        Search by name:
        </label>
          <input
          className="input-box"
          type="text"
          placeholder=""
          name="search"
          className="search-input"
          value={this.state.search}
          onChange={event => this.handleChange(event)}
          />
      </form>
    )
  }
}

export default SortInput;
