import React from 'react'
import classes from  './PopularLocations.module.css'
import map_view from '@/assets/images/map_view.svg'
import location_bg_image from '@/assets/images/location_bg_image.png'
import Roomcard from '../../../common/Roomcard'
import Image from 'next/image'
import { FaRegMap } from "react-icons/fa";

function PopularLocations({data}:any) {
  console.log("--------",data)

const {spaces} = data 


  const {heading,mapviewbtn:{title,url}} = data
  return (
    <>
      <section className="popular_locations position-relative">
        <div className="homemmain_padding">
        <div className="homemain_conatiner popular_locations_title d-flex justify-content-between">
          <h3 className='heading_h3 dark font-bold'>{heading}</h3>
          <button className='d-none d-md-flex align-items-center font-bold text'>{title} <FaRegMap /> </button>
        </div>
        </div>
        <div className="map_image position-relative">
          <Image src={location_bg_image} alt=""  className='img-fluid'/>
          <div className="popular_locations_title position-absolute">
          <button className=' d-md-none align-items-center font-bold text'>{title} <FaRegMap /> </button>
          </div>
        </div>
        
        {/* <div className="homemmain_padding"> */}
        <div className="homemain_conatiner  card_conatiner   ">
          <div className='row nowrap overflow-x-scroll'>
            {spaces.data.map((card:any,index:number)=>(
              <div className="col-md-3">

                {/* <Roomcard carddata={card} /> */}
              </div>
            ))}
            </div>
          </div>
        {/* </div> */}
      </section>
    </>
  )
}

export default PopularLocations