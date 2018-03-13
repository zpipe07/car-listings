import React, { Component } from 'react';
import Header from '../Header/Header';
import CarList from '../CarList/CarList';
import CarDetail from '../CarDetail/CarDetail';
import CarSorting from '../CarSorting/CarSorting';
import CarSearch from '../CarSearch/CarSearch';
import { sortArray, filterArray } from '../../utils/utils';

import './App.css';

const apiUrl =
  'https://gist.githubusercontent.com/creatifyme/2a334c00a117097bfdb47f031edf292c/raw/efb52ecf1cf92e2261f504ec7639c68b5ff390bd/cars.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: undefined,
      visibleCars: undefined,
      selectedCar: undefined,
      sorting: {
        category: undefined,
        direction: undefined,
      },
      search: '',
    };

    this.carMap = new Map();
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(apiUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          cars: data,
          visibleCars: data,
        });
      });
  }

  onCarClick(index) {
    this.setState({
      selectedCar: this.state.visibleCars[index],
    });
  }

  clearSelectedCar() {
    this.setState({
      selectedCar: undefined,
    });
  }

  getCars(cars, search = '', category = '', direction = '') {
    const key = `${search}${category}${direction}`;

    if (this.carMap.has(key)) {
      return this.carMap.get(key);
    }

    let newCars;

    if (search) {
      newCars = filterArray(cars, search);
    } else {
      newCars = sortArray(cars, category, direction);
    }

    this.carMap.set(key, newCars);

    return newCars;
  }

  onSortingClick(category) {
    const direction =
      this.state.sorting.category === category
        ? this.state.sorting.direction * -1
        : 1;

    const sortedCars = this.getCars(
      this.state.visibleCars,
      undefined,
      category,
      direction
    );

    this.setState({
      visibleCars: sortedCars,
      sorting: {
        category,
        direction,
      },
    });
  }

  onSearchSubmit(search) {
    const filteredCars = this.getCars(
      this.state.cars,
      search,
      undefined,
      undefined
    );

    this.setState({
      visibleCars: filteredCars,
      sorting: {
        category: undefined,
        direction: undefined,
      },
      search,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main className="App__main">
          {this.state.selectedCar ? (
            <CarDetail
              car={this.state.selectedCar}
              clearSelectedCar={this.clearSelectedCar.bind(this)}
            />
          ) : (
            <div>
              <div className="App__filters">
                <CarSearch onSearchSubmit={this.onSearchSubmit.bind(this)} />

                <CarSorting
                  sorting={this.state.sorting}
                  onSortingClick={this.onSortingClick.bind(this)}
                />
              </div>

              <CarList
                cars={this.state.visibleCars}
                onCarClick={this.onCarClick.bind(this)}
              />
            </div>
          )}
        </main>
      </div>
    );
  }
}

export default App;
