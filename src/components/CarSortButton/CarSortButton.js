import React from 'react';

import './CarSortButton.css';

const CarSortButton = ({ category, direction, active, onClick }) => {
  const directionClass =
    direction > 0 ? 'CarSortButton--increasing' : 'CarSortButton--decreasing';

  return (
    <button
      className={
        'CarSortButton' +
        (active ? ` CarSortButton--active ${directionClass}` : '')
      }
      onClick={() => onClick(category)}
    >
      By {category}
    </button>
  );
};

export default CarSortButton;
