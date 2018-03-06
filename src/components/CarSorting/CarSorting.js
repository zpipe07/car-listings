import React from 'react';

const CarSorting = (props) => {
  return (
    <div>
      <h3>Sort</h3>
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
    </div>
  );
};

export default CarSorting;
