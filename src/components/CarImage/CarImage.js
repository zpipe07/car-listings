import React from 'react';

import './CarImage.css';

const CarImage = ({ imageUrl }) => {
  return <img className="CarImage" src={imageUrl} />;
};

export default CarImage;
