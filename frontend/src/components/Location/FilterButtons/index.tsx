import React, { useContext, useState } from 'react';
import classes from './FilterButtons.module.css';
import Image from 'next/image';
import filter_icon from '../../../assets/images/filter_icon.svg';
import refresh from '../../../assets/images/refresh.svg';
import { locationContext } from '@/store/locationContext';

interface FilterButtonsProps {
  page: string;
  // prices: string[];
  // spaceCategories: string[];
  onClear: any;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ page,onClear }) => {
  const {onSpaceCategoryChange, onPriceChange, originalSpaces } = useContext(locationContext);

  const [priceFilterSelected, setPriceFilterSelected] = useState(false);
  const [categoryFilterSelected, setCategoryFilterSelected] = useState(false);
  const [showFilter, setShoWFilter] = useState(false);
  
  const pageName = page === "coworking";
  const clearAllFilters = () => {
    onClear();
    setPriceFilterSelected(false);
    setCategoryFilterSelected(false);
  };

  const spaceCategoryChange = (e: any) => {
    const selectedCategory = e.target.value;
    onSpaceCategoryChange(selectedCategory);
    setCategoryFilterSelected(true);
  };

  const priceRangeChange = (e: any) => {
    const selectedRange = e.target.value.split('-').map((val: string) => parseInt(val, 10));
    onPriceChange(selectedRange);
    setPriceFilterSelected(true);
  };


  const uniqueSpaceCategories = Array.from(new Set(originalSpaces.map((office: any) => office.spaceCategory)));
  // const uniquePrices = Array.from(new Set(originalSpaces.map((office: any) => office.price)));
  // console.log(uniquePrices);


  let filterCount:number = 0;
if (priceFilterSelected && categoryFilterSelected) {
  filterCount = 2;
} else if (priceFilterSelected || categoryFilterSelected) {
  filterCount = 1;
}





  const priceRanges = [
    { label: '<25 $', value: '0-25' },
    { label: '<50 $', value: '0-50' },
    { label: '<75 $', value: '0-75' },
    { label: '<100 $', value: '0-100' },
  ];




  return (
    <div className={`${classes.filter_btns} d-flex flex-wrap ${pageName ? `${classes.filter_btns_cowrking}` : ''}`}>
      <button  onClick={()=> setShoWFilter(!showFilter)} className='dark text font-semibold d-flex align-items-center flex-nowrap'>
        <Image src={filter_icon} alt="" /> Filters ({filterCount})
      </button>
      {pageName ? (
        <>
         {showFilter  && <div className={`${classes.filter_btns_dropdown} d-none d-md-flex`}>
            <select name="" id="" onChange={priceRangeChange} className='rounded-pill text font-normal dark_gray text-capitalize'>
              <option value="" disabled selected={!priceFilterSelected}>Price</option>
              {priceRanges.map((range, index) => (
                <option key={index} value={range.value}>{range.label}</option>
              ))}
            </select>
            <select name="" onChange={spaceCategoryChange} id="" className='rounded-pill text font-normal dark_gray text-capitalize'>
              <option value="" disabled selected={!categoryFilterSelected}>Categories</option>
              {uniqueSpaceCategories.map((category: string, index: number) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>
      }
          <button className='dark_gray text font-noraml d-none d-md-flex align-items-center flex-nowrap' onClick={clearAllFilters}>
            <Image src={refresh} alt="" />Clear All
          </button>
        </>
      ) : (
        <>
          {showFilter && <div className={`${classes.filter_btns_dropdown}`}>
            <select name="" id="" onChange={priceRangeChange} className='rounded-pill text font-normal dark_gray text-capitalize'>
              <option value="" disabled selected={!priceFilterSelected}>Price</option>
              {priceRanges.map((range, index) => (
                <option key={index} value={range.value}>{range.label}</option>
              ))}
            </select>
            <select name="" onChange={spaceCategoryChange} id="" className='rounded-pill text font-normal dark_gray text-capitalize'>
              <option value="" disabled selected={!categoryFilterSelected}>Categories</option>
              {uniqueSpaceCategories.map((category: string, index: number) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>
}
          <button className='dark_gray text font-noraml d-flex align-items-center flex-nowrap' onClick={clearAllFilters}>
            <Image src={refresh} alt="" />Clear All
          </button>
        </>
      )}
    </div>
  );
};

export default FilterButtons;
