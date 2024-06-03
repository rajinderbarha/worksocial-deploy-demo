import React from 'react'
import classes from './LocationCard.module.css'
import location_card_image from '../../assets/images/location_card_image.png'
import { IoBookmarkOutline } from "react-icons/io5";
import Image from 'next/image';


function LocationCard() {
  return (
   <>
   <div className={`${classes.LocationCard} LocationCard`} >
<div className="row gx-0">
    <div className="col-md-5">
        <div className={`${classes.LocationCard_image}`}>
            <Image src={location_card_image} alt="" className='w-100 h-100'/>
        </div>
    </div>
    <div className="col-md-7">
        <div className={`${classes.LocationCard_content} d-flex flex-column justify-content-between h-100`}>
            <div className={`d-flex justify-content-between`}>
                <div className={`${classes.LocationCard_text} font-inter`}>
                    <p className={`${classes.LocationCard_text_city} subtitle font-normal`}><span>Hotel . </span><span>Jersey City</span></p>
                    <p className='text_body dark font-semibold '>WorkSocial Jersey City</p>
                </div>
                <div className={`${classes.LocationCard_bookmark_icon}`}>
                <IoBookmarkOutline color='grey_mid'/>
                </div>
            </div>
            <div className={`font-inter text-end`}>
                <p className={`${classes.pricetext} font-normal`}>Starting at</p>
                <h6 className={`${classes.price_number} price dark font-semibold`}><span className={`${classes.pricetext_dollor}`}>$</span>99<span className={`${classes.price_time} font-semibold `}>/ hr</span></h6>
           
            </div>
        </div>
    </div>
</div>
   </div>
   </>
  )
}

export default LocationCard