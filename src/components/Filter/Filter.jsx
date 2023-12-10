import React from 'react';
import './Filter.css';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from '../../redux/filtersSlice';
import { getFilter } from '../../redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilter = e => {
    dispatch(setStatusFilter(e.target.value));
  };

  return (
    <div>
      <label className="filter-contact" htmlFor="filter">
        Find contacts by name{' '}
      </label>
      <input
        type="text"
        value={filter}
        onChange={handleFilter}
        placeholder="Find contacts by name"
      />
    </div>
  );
};
