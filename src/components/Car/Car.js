import React from 'react';
import CarYear from '../CarYear/CarYear';
import CarMake from '../CarMake/CarMake';
import CarModel from '../CarModel/CarModel';

import './Car.css';

const Car = ({ car, onCarClick }) => {
  return (
    <li className="Car">
      <button className="Car__button" onClick={onCarClick}>
        <CarYear year={car.year} />
        <CarMake make={car.make} />
        <CarModel model={car.model} />
      </button>
    </li>
  );
};

export default Car;
