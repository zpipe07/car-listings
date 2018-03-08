import React, { Component } from 'react';

import './CarSearch.css';

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
      <form className="CarSearch__form" onSubmit={this.onFormSubmit.bind(this)}>
        <label className="CarSearch__label" htmlFor="carSearch">
          Search for cars by year, make, and model
        </label>
        <input
          className="CarSearch__input"
          type="search"
          name="search"
          id="carSearch"
          value={this.state.search}
          onChange={this.onInputChange.bind(this)}
        />

        <button className="CarSearch__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default CarSearch;
