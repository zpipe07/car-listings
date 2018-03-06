import React from 'react';

import Car from '../Car/Car';

const CarList = (props) => {
  return (
    <ul>
      {props.cars.map((car, i) => {
        return <Car car={car} onCarClick={() => props.onCarClick(i)} key={i} />;
      })}
    </ul>
  );
};

export default CarList;
