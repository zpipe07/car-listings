import React from 'react';

import Car from '../Car/Car';

const CarList = (props) => {
  return (
    <ul>
      {props.cars.map((car) => {
        const key = `${car.year}-${car.make}-${car.model}`;
        return <Car car={car} key={key} />;
      })}
    </ul>
  );
};

export default CarList;
