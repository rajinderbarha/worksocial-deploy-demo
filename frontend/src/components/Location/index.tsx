import React, { useState, useContext, useEffect, useRef } from 'react';
import classes from './LocationPage.module.css';
import Image from 'next/image';
import search_icon from '../../assets/images/search_icon.svg';
import full_screen_icon from '../../assets/images/full_screen_icon.svg';
import FilterButtons from '@/location/FilterButtons';
import filter_icon from '../../assets/images/filter_icon.svg';
import SortBy from '@/location/SortBy';
import LocationCard from '@/location/LocationCard';
import { RxCross2 } from "react-icons/rx";
import Roomcard from '@/common/Roomcard';
import { locationContext } from '../../store/locationContext';
import GoogleMapComponent from './GoogleMapComponent';

const ITEMS_PER_PAGE = 2;

function LocationPage() {
  const { isLoading, filteredSpaces, onSearchInputChange, onSortChange, onSpaceCategoryChange, onPriceChange, sort, searchTerm, spaceCategory } = useContext(locationContext);

  const [visibleCards, setVisibleCards] = useState(ITEMS_PER_PAGE);
  const loaderRef = useRef(null);

  const mappedData = filteredSpaces.flatMap((space: any) => space);
  // const uniquePrices = Array.from(new Set(mappedData.map((office: any) => office.price)));
  // const uniqueSpaceCategories = Array.from(new Set(mappedData.map((office: any) => office.spaceCategory)));
  const SpaceLocation = Array.from(new Set(mappedData.map((office: any) => office.SpaceLocation)));
  const uniqueLocations = Array.from(new Set(SpaceLocation.map(item => JSON.stringify({
    longitude: item.longitude.trim(),
    latitude: item.latitude.trim()
  })))).map(str => JSON.parse(str));

  const searchHandler = (e: any) => {
    onSearchInputChange(e.target.value);
  };

  const clearAllFilterHandler = () => {
    onSearchInputChange("");
    onSpaceCategoryChange("");
    onSortChange("");
    onPriceChange(null); // Clear the selected price range

  };
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setVisibleCards((prev) => prev + ITEMS_PER_PAGE);
      }
    });
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []);

  return (
    <>
      <section className={`${classes.LocationPage} border`}>
        <div className="homemmain_padding">
          <div className={`${classes.LocationPage_conatiner}`}>
            <div className={`${classes.LocationPage_removepadding} ${classes.LocationPage_mobileheading} homemmain_padding`}>
              <div className={`${classes.LocationPage_heading}`}>
                <h6 className="heading_h6 dark font-semibold font-lato">Find a location</h6>
              </div>
              <div className={`${classes.LocationPage_searchbar} d-md-none d-flex align-items-center`}>
                <div className={`${classes.LocationPage_search} d-flex align-items-center justify-content-between`}>
                  <input type="search" name="" id="" placeholder='Newark coworking' className='font-lato text font-noraml' />
                  <Image src={search_icon} alt="" />
                </div>
                <div className={`${classes.mobile_filterbtn}`}><button className='border-0 bg-transparent'><Image src={filter_icon} alt="" /></button></div>
              </div>
            </div>
            <div className={`${classes.location_component_mainDiv} row gx-0`}>
              <div className={`${classes.location_card_div} col-md-6 order-md-1 order-2`}>
                <div className={`${classes.LocationPage_leftdivider}`}>
                  <div className={`${classes.LocationPage_controls}`}>
                    <div className={`${classes.LocationPage_search} d-none d-md-flex align-items-center`}>
                      <input type="search" name="" id="" value={searchTerm} onChange={searchHandler} placeholder='search' className='font-lato text font-noraml' />
                      <Image src={search_icon} alt="" />
                    </div>
                    <div className={`${classes.LocationPage_filterBtns} d-none d-md-flex`}>
                      <FilterButtons page=""  onClear={clearAllFilterHandler} />
                    </div>
                    <div className={`${classes.LocationPage_SortBtns} text-end d-none d-md-block`}>
                      <SortBy sort={sort} />
                    </div>
                  </div>
                  <div className={`${classes.LocationPage_card} ${classes.LocationPage_removepadding} homemmain_padding`}>
                    <h6 className="dark font-bold d-block d-md-none">Popular Locations</h6>
                    <div className={`${classes.LocationPage_cardContain} d-none d-md-block`}>
                      {isLoading ? (
                        <h3>Loading...</h3>
                      ) : mappedData.length > 0 ? (
                        mappedData.slice(0, visibleCards).map((office: any, index: number) => (
                          <LocationCard key={index} office={office} />
                        ))
                      ) : (
                        searchTerm && <h3>Location Not Found</h3>
                      )}
                      <div ref={loaderRef} className={`${classes.loader}`}></div>
                    </div>
                    <div className="d-flex d-md-none">
                      <div className={`row flex-nowrap overflow-x-scroll ${classes.Roomcards_padding}`}>
                        <div className='col-md-3 max-content'><Roomcard page="" /></div>
                        <div className='col-md-3 max-content'><Roomcard page="" /></div>
                        <div className='col-md-3 max-content'><Roomcard page="" /></div>
                        <div className='col-md-3 max-content'><Roomcard page="" /></div>
                      </div>
                    </div>
                    <div className={`${classes.LocationPage_closebtn} ${classes.LocationPage_closebtn_mobile} d-flex d-md-none justify-content-center`}>
                      <button className='text font-bold text-white rounded-pill'>Close Map <RxCross2 className='text-white' /></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${classes.LocationPage_map_col} col-md-6 order-md-2 order-1`}>
                <div className={`${classes.LocationPage_rightdivider}`}>
                  <div className={`${classes.LocationPage_map} ${classes.LocationPage_removepadding} position-relative`}>
                    <GoogleMapComponent mark={uniqueLocations} loc={{ longitude: '-74.03325429743136', latitude: '40.72635818266189' }} zoom={9} />
                    <div className={`${classes.LocationPage_fullscreen_icon} position-absolute`}>
                      <Image src={full_screen_icon} alt="" className='h-100' />
                    </div>
                    <div className={`${classes.LocationPage_closebtn} d-none d-md-flex position-absolute`}>
                      <button className='text font-bold text-white rounded-pill'>Close Map <RxCross2 className='text-white' /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LocationPage;
