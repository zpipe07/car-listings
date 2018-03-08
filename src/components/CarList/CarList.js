import React from 'react';
import Car from '../Car/Car';
import CarLoader from '../CarLoader/CarLoader';

import './CarList.css';

const CarList = (props) => {
  return props.cars ? (
    props.cars.length ? (
      <ul className="CarList">
        {props.cars.map((car, i) => {
          return (
            <Car car={car} onCarClick={() => props.onCarClick(i)} key={i} />
          );
        })}
      </ul>
    ) : (
      <p className="CarList__empty">No cars match your search.</p>
    )
  ) : (
    <CarLoader />
  );
};

export default CarList;
