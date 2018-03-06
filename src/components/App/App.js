import React, { Component } from 'react';
import CarList from '../CarList/CarList';
import CarDetail from '../CarDetail/CarDetail';

import cars from '../../mocks/cars';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars,
      visibleCars: cars,
      selectedCar: undefined,
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

  render() {
    return (
      <div className="App">
        <header>Hello from the header</header>

        <main>
          {this.state.selectedCar ? (
            <CarDetail
              car={this.state.selectedCar}
              clearSelectedCar={this.clearSelectedCar.bind(this)}
            />
          ) : (
            <CarList
              cars={this.state.visibleCars}
              onCarClick={this.onCarClick.bind(this)}
            />
          )}
        </main>

        <footer>Hello from footer</footer>
      </div>
    );
  }
}

export default App;
