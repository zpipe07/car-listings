import React, { Component } from 'react';
import CarList from '../CarList/CarList';

import cars from '../../mocks/cars';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars,
      selectedCar: undefined,
    };
  }

  onCarClick() {
    this.setState({
      selectedCar: true,
    });
  }

  render() {
    return (
      <div className="App">
        <header>Hello from the header</header>

        <main>
          {!this.state.selectedCar ? (
            <CarList
              cars={this.state.cars}
              onCarClick={this.onCarClick.bind(this)}
            />
          ) : (
            <span>foobar</span>
          )}
        </main>

        <footer>Hello from footer</footer>
      </div>
    );
  }
}

export default App;
