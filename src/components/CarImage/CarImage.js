import React from 'react';

import './CarImage.css';

const CarImage = ({ imageUrl, title }) => {
  return <img className="CarImage" src={imageUrl} alt={title} />;
};

export default CarImage;
