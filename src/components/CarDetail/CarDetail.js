import React from 'react';

const CarDetail = ({ car, clearSelectedCar }) => {
  return (
    <div>
      <button onClick={clearSelectedCar}>Back</button>
      <h3>{car.year}</h3>
      <h2>{car.make}</h2>
      <h1>{car.model}</h1>
      <h4>{car.milage}</h4>
      <img src={car.image_url} alt="" className="img" />
    </div>
  );
};

export default CarDetail;
