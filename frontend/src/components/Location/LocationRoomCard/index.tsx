import React from 'react'
// import './Roomcard.css'
import location_long_room from '@/assets/images/location_long_room.png'
import table_chair from '@/assets/images/table_chair.svg'
import projector from '@/assets/images/projector.svg'
import breakfast from '@/assets/images/breakfast.svg'
import bookroom_check_icon from '@/assets/images/bookroom_check_icon.svg'
import Image from 'next/image'

function LocationRoomCard() {
  return (
   <>
   <div className="Roomcard">
    <div className="Roomcard_cover_image">
        <Image src={location_long_room} alt="" />
    </div>
    <div className="card_details  d-flex justify-content-center gap-3">
        <div className="left_detail  d-flex flex-column justify-content-between">
            <p className='font-lato font-bold'>The Long Room</p>
            <div className="icons d-flex gap-0">
                <Image src={table_chair} alt="" />
                <Image src={projector} alt="" />
                <Image src={breakfast} alt="" />
            </div>
        </div>
        <div className="right_detail  d-flex flex-column align-items-end">
            <div className="right_detail_text ">
                <p className='pricetext '>Starting at</p>
                <h5 className='heading_h5 price dark_gray font-lato font-semibold'>$99<span className='subtitle font-semibold font-lato'></span></h5>
            </div>
            <button className='orange_dark_background d-flex font-bold text'>Book <Image src={bookroom_check_icon} alt="" /> </button>
        </div>
    </div>
   </div>
   </>
  )
}

export default LocationRoomCard