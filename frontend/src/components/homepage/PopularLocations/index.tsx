import React from 'react'
import classes from  './PopularLocations.module.css'
import map_view from '@/assets/images/map_view.svg'
import location_bg_image from '@/assets/images/location_bg_image.png'
import Roomcard from '../Roomcard'
import Image from 'next/image'
import { FaRegMap } from "react-icons/fa";

function PopularLocations() {
  return (
    <>
      <section className="popular_locations position-relative">
        <div className="homemmain_padding">
        <div className="homemain_conatiner popular_locations_title d-flex justify-content-between">
          <h3 className='heading_h3 dark font-bold'>Popular Locations Near You</h3>
          <button className='d-none d-md-flex align-items-center font-bold text'> Map View <FaRegMap /> </button>
        </div>
        </div>
        <div className="map_image position-relative">
          <Image src={location_bg_image} alt=""  className='img-fluid'/>
          <div className="popular_locations_title position-absolute">
          <button className=' d-md-none align-items-center font-bold text'> Map View <FaRegMap /> </button>
          </div>
        </div>
        {/* <div className="homemmain_padding"> */}
        <div className="homemain_conatiner  card_conatiner   ">
          <div className='row nowrap'>
          <div className='col-md-3 max-content'>  <Roomcard /> </div>
          <div className='col-md-3 max-content'>  <Roomcard /> </div>
          <div className='col-md-3 max-content'>  <Roomcard /> </div>
          <div className='col-md-3 max-content'>  <Roomcard /> </div>
          </div>
          </div>
        {/* </div> */}
      </section>
    </>
  )
}

export default PopularLocations