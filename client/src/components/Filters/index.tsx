import React from 'react';

import './Filters.scss';

const Filters = () => {
  return (
    <div className="filter">
      <p className="filter__title filter__title--big">Filters</p>
      <div className="filter__filter-div">
        <p className="filter__title filter__title-small">Price</p>
        <div className="filter__item">
          <div className="filter__radio-group">
            <input className="filter__radio" type="radio" id="expensive" value="expensive" />
            <label className="filter__label">Expensive first</label>
          </div>
          <div className="filter__radio-group">
            <input className="filter__radio" type="radio" id="cheap" value="cheap" />
            <label className="filter__label">Cheap first</label>
          </div>
        </div>
      </div>

      <div className="filter__filter-div">
        <p className="filter__title filter__title-small">Size</p>
        <div className="filter__item">
          <div className="filter__radio-group">
            <input className="filter__radio" type="radio" id="big" value="big" />
            <label className="filter__label">Big first</label>
          </div>
          <div className="filter__radio-group">
            <input className="filter__radio" type="radio" id="small" value="small" />
            <label className="filter__label">Small first</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
