import React from 'react';

import './CarSortButton.css';

const CarSortButton = ({ category, label, direction, active, onClick }) => {
  const directionClass =
    direction > 0 ? 'CarSortButton--increasing' : 'CarSortButton--decreasing';

  return (
    <div>
      <label
        className="CarSortButton__label"
        id={`carSortButtonLabel-${category}`}
      >
        {label}
      </label>
      <button
        className={
          'CarSortButton' +
          (active ? ` CarSortButton--active ${directionClass}` : '')
        }
        onClick={() => onClick(category)}
        aria-labelledby={`carSortingTitle carSortButtonLabel-${category}`}
      >
        {label}
      </button>
    </div>
  );
};

export default CarSortButton;
