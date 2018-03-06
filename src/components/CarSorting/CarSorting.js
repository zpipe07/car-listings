import React from 'react';

const CarSorting = (props) => {
  return (
    <ul>
      <li>
        <button onClick={() => props.onSortingClick('year')}>By year</button>
      </li>
      <li>
        <button onClick={() => props.onSortingClick('mileage')}>
          By mileage
        </button>
      </li>
      <li>
        <button onClick={() => props.onSortingClick('listing')}>
          By listing age
        </button>
      </li>
    </ul>
  );
};

export default CarSorting;
