import React from 'react';

import './Car.css';

const Car = ({ car, onCarClick }) => {
  return (
    <li className="Car">
      <button className="Car__button" onClick={onCarClick}>
        {car.year} {car.make} {car.model}
        <em className="Car__miles">{car.mileage} miles</em>
      </button>
    </li>
  );
};

export default Car;
