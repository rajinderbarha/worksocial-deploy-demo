import React, { useContext } from 'react';
import classes from './SortBy.module.css';
import { locationContext } from '@/store/locationContext';

function SortBy({ sort }: any) {
  const { onSortChange } = useContext(locationContext);

  const handleSortChange = (e: any) => {
    onSortChange(e.target.value);
  };

  return (
    <>
      <div className={`${classes.SortBy}`}>
        <select
          name=""
          id=""
          value={sort}
          onChange={handleSortChange}
          className="rounded-pill text font-normal dark_gray text-capitalize"
        >
          <option value="" disabled>
            Sort
          </option>
          <option value="low to high">By Price low to high</option>
          <option value="high to low">By Price high to low</option>
        </select>
      </div>
    </>
  );
}

export default SortBy;
