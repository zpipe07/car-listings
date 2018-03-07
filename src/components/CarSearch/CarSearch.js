import React, { Component } from 'react';

class CarSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  onInputChange(e) {
    const target = e.target;
    const key = target.name;
    const value = target.value;

    this.setState({
      [key]: value,
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.search);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <label htmlFor="carSearch">Search for a car</label>
        <input
          type="search"
          name="search"
          id="carSearch"
          placeholder="1999 Chevy Astro"
          value={this.state.search}
          onChange={this.onInputChange.bind(this)}
        />

        <button type="submit">Search</button>
      </form>
    );
  }
}

export default CarSearch;
