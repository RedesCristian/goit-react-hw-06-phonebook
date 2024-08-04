import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

const FilterForm = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);

  const handleFilterChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <div>
      <h2>Filter Contacts</h2>
      <label htmlFor="filter">Filter by name</label>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Enter name to filter"
      />
    </div>
  );
};

export default FilterForm;
