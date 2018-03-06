import React from 'react';

const Car = (props) => {
  return (
    <li>
      <h3>{props.car.year}</h3>
      <h2>{props.car.make}</h2>
      <h1>{props.car.model}</h1>
    </li>
  );
};

export default Car;
