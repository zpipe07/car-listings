import React, { Component } from 'react';
import CarList from '../CarList/CarList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>Hello from the header</header>

        <main>
          Hellow from main
          <CarList />
        </main>

        <footer>Hello from footer</footer>
      </div>
    );
  }
}

export default App;
