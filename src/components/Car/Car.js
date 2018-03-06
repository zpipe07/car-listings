import React from 'react';

const Car = ({ car, onCarClick }) => {
  return (
    <li>
      <button onClick={onCarClick}>
        <h3>{car.year}</h3>
        <h2>{car.make}</h2>
        <h1>{car.model}</h1>
      </button>
    </li>
  );
};

export default Car;
