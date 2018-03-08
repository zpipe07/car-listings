import React from 'react';
import CarImage from '../CarImage/CarImage';

import './CarDetail.css';

const CarDetail = ({ car, clearSelectedCar }) => {
  const title = `${car.year} ${car.make} ${car.model}`;

  return (
    <section>
      <button className="CarDetail__button" onClick={clearSelectedCar}>
        Back
      </button>

      <h1>{title}</h1>

      <h3 className="CarDetail__miles">
        <em>{car.mileage} miles</em>
      </h3>

      <CarImage imageUrl={car.image_url} title={title} />
    </section>
  );
};

export default CarDetail;
