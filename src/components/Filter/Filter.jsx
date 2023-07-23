import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../Toolkit/filterSlice';
import { getFilter } from '../Toolkit/filterSelectors';

import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  return (
    <div className={css.filterBox}>
      <p className={css.filterTitle}>Find contacts by name</p>
      <input
        className={css.filterInput}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
