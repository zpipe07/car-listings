import React, { Component } from 'react';
import CarList from '../CarList/CarList';
import CarDetail from '../CarDetail/CarDetail';
import CarSorting from '../CarSorting/CarSorting';

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
      sorting: {
        category,
        direction,
      },
    });
  }

  sortCars(cars, sorting) {
    return cars.sort((a, b) => {
      return a - b;
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // this.setState({
    //   visibleCars: this.sortCars(prevState.visibleCars, this.state.sorting),
    // });
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
              <CarSorting onSortingClick={this.onSortingClick.bind(this)} />

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
