import React, { Component } from 'react';
import CarList from '../CarList/CarList';
import CarDetail from '../CarDetail/CarDetail';
import CarSorting from '../CarSorting/CarSorting';
import CarSearch from '../CarSearch/CarSearch';

import cars from '../../mocks/cars';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars,
      visibleCars: cars,
      selectedCar: undefined,
      sorting: {
        category: undefined,
        direction: 1,
      },
    };
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

  onSortingClick(category) {
    const direction = this.state.sorting.category
      ? this.state.sorting.direction * -1
      : 1;

    this.setState({
      visibleCars: this.sortCars(this.state.visibleCars, category, direction),
      sorting: {
        category,
        direction,
      },
    });
  }

  sortCars(cars, category, direction) {
    return cars.sort((a, b) => {
      return direction > 0
        ? a[category] - b[category]
        : b[category] - a[category];
    });
  }

  onSearchSubmit(search) {
    this.setState({
      visibleCars: this.filterCars(this.state.cars, search),
    });
  }

  filterCars(cars, search) {
    return cars.filter((car) => {
      for (let i = 0; i < search.length; i++) {
        const word = search[i].toLowerCase();
        const match =
          car.year
            .toString(10)
            .toLowerCase()
            .match(word) ||
          car.make.toLowerCase().match(word) ||
          car.model.toLowerCase().match(word);

        if (!match) {
          return false;
        }
      }

      return true;
    });
  }

  render() {
    return (
      <div className="App">
        <main className="App__main">
          {this.state.selectedCar ? (
            <CarDetail
              car={this.state.selectedCar}
              clearSelectedCar={this.clearSelectedCar.bind(this)}
            />
          ) : (
            <div>
              <CarSearch onSearchSubmit={this.onSearchSubmit.bind(this)} />

              <CarSorting
                sorting={this.state.sorting}
                onSortingClick={this.onSortingClick.bind(this)}
              />

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
