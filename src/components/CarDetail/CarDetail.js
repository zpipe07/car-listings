import React from 'react';
import CarYear from '../CarYear/CarYear';
import CarMake from '../CarMake/CarMake';
import CarModel from '../CarModel/CarModel';
import CarMileage from '../CarMileage/CarMileage';
import CarImage from '../CarImage/CarImage';

const CarDetail = ({ car, clearSelectedCar }) => {
  return (
    <section>
      <button onClick={clearSelectedCar}>Back</button>

      <CarYear year={car.year} />
      <CarMake year={car.make} />
      <CarModel model={car.model} />
      <CarMileage mileage={car.mileage} />
      <CarImage
        imageUrl={car.image_url}
        title={`${car.year} ${car.make} ${car.model}`}
      />
    </section>
  );
};

export default CarDetail;