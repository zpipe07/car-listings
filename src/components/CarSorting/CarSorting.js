import React from 'react';
import CarSortButton from '../CarSortButton/CarSortButton';

import './CarSorting.css';

const CarSorting = ({ sorting, onSortingClick }) => {
  return (
    <div className="CarSorting">
      <h3>Sort</h3>
      <ul className="CarSorting__list">
        <li>
          <CarSortButton
            category="year"
            direction={sorting.direction}
            active={sorting.category === 'year'}
            onClick={onSortingClick}
          />
        </li>
        <li>
          <CarSortButton
            category="mileage"
            direction={sorting.direction}
            active={sorting.category === 'mileage'}
            onClick={onSortingClick}
          />
        </li>
        <li>
          <CarSortButton
            category="created_at"
            direction={sorting.direction}
            active={sorting.category === 'created_at'}
            onClick={onSortingClick}
          />
        </li>
      </ul>
    </div>
  );
};

export default CarSorting;
