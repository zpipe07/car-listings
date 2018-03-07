import React from 'react';
import Car from '../Car/Car';
import CarLoader from '../CarLoader/CarLoader';

import './CarList.css';

const CarList = (props) => {
  return (
    <ul className="CarList">
      {props.cars ? (
        props.cars.map((car, i) => {
          return (
            <Car car={car} onCarClick={() => props.onCarClick(i)} key={i} />
          );
        })
      ) : (
        <CarLoader />
      )}
    </ul>
  );
};

export default CarList;
