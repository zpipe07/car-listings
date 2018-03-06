import React from 'react';
import Car from '../Car/Car';

import './CarList.css';

const CarList = (props) => {
  return (
    <ul className="CarList">
      {props.cars.map((car, i) => {
        return <Car car={car} onCarClick={() => props.onCarClick(i)} key={i} />;
      })}
    </ul>
  );
};

export default CarList;
