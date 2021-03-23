import React, { useState } from 'react';
import { FilterProps } from '../../types';

import './Filters.scss';

const Filters = ({ setPrice, setSize }: FilterProps) => {
  return (
    <div className="filter">
      <p className="filter__title filter__title--big">Filters</p>
      <div className="filter__filter-div">
        <p className="filter__title filter__title-small">Price</p>
        <div
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)}
          className="filter__item"
        >
          <div className="filter__radio-group">
            <input className="filter__radio" type="radio" name="price" value="expensive" />
            <label className="filter__label">Expensive first</label>
          </div>
          <div className="filter__radio-group">
            <input className="filter__radio" type="radio" name="price" value="cheap" />
            <label className="filter__label">Cheap first</label>
          </div>
        </div>
      </div>

      <div className="filter__filter-div">
        <p className="filter__title filter__title-small">Size</p>
        <div
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSize(e.target.value)}
          className="filter__item"
        >
          <div className="filter__radio-group">
            <input className="filter__radio" type="radio" name="size" value="big" />
            <label className="filter__label">Big first</label>
          </div>
          <div className="filter__radio-group">
            <input className="filter__radio" type="radio" name="size" value="small" />
            <label className="filter__label">Small first</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
