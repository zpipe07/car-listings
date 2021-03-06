import React from 'react';
import CarSortButton from '../CarSortButton/CarSortButton';

import './CarSorting.css';

const CarSorting = ({ sorting, onSortingClick }) => {
  return (
    <div>
      <h4 className="CarSorting__title" id="carSortingTitle">
        Sort Cars
      </h4>
      <ul className="CarSorting__list">
        <li className="CarSorting__item">
          <CarSortButton
            category="year"
            label="By year"
            direction={sorting.direction}
            active={sorting.category === 'year'}
            onClick={onSortingClick}
            aria-labelledby="carSortingTitle"
          />
        </li>
        <li className="CarSorting__item">
          <CarSortButton
            category="mileage"
            label="By mileage"
            direction={sorting.direction}
            active={sorting.category === 'mileage'}
            onClick={onSortingClick}
            aria-labelledby="carSortingTitle"
          />
        </li>
        <li className="CarSorting__item">
          <CarSortButton
            category="created_at"
            label="By listing date"
            direction={sorting.direction}
            active={sorting.category === 'created_at'}
            onClick={onSortingClick}
            aria-labelledby="carSortingTitle"
          />
        </li>
      </ul>
    </div>
  );
};

export default CarSorting;
