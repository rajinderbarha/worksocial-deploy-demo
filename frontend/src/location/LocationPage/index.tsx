import React from 'react'
import classes from './LocationPage.module.css'
import Image from 'next/image'
import search_icon from '../../assets/images/search_icon.svg'
import full_screen_icon from '../../assets/images/full_screen_icon.svg'
import map_image from '../../assets/images/map_image.png'
import FilterButtons from '@/components/FilterButtons'
import filter_icon from '../../assets/images/filter_icon.svg'
import SortBy from '@/components/SortBy'
import LocationCard from '@/components/LocationCard'
import { RxCross2 } from "react-icons/rx";
import Roomcard from '@/components/Roomcard'
function LocationPage() {
    return (
        <>
            <section className={`${classes.LocationPage} border`}>
                <div className="homemmain_padding">
                    <div className={`${classes.LocationPage_conatiner} `}>
                        <div className={`${classes.LocationPage_removepadding} ${classes.LocationPage_mobileheading} homemmain_padding`}>
                            <div className={`${classes.LocationPage_heading}`}>
                                <h6 className="heading_h6 dark font-semibold font-lato">Find a location</h6>
                            </div>
                            <div className={`${classes.LocationPage_searchbar}  d-md-none d-flex align-items-center`}>

                                <div className={`${classes.LocationPage_search} d-flex align-items-center justify-content-between`}>
                                    <input type="search" name="" id="" placeholder='Newark coworking' className='font-lato text font-noraml' />
                                    <Image src={search_icon} alt="" />
                                </div>
                                <div className={`${classes.mobile_filterbtn}`}><button className='border-0 bg-transparent'><Image src={filter_icon} alt="" /></button></div>
                            </div>
                        </div>
                        <div className="row gx-0">
                            <div className="col-md-6 order-md-1 order-2">
                                <div className={`${classes.LocationPage_leftdivider}`}>
                                    <div className={`${classes.LocationPage_controls}`}>
                                        {/* <h6 className=" dark font-semibold font-lato d-block d-md-none">Popular Locations</h6> */}

                                        <div className={`${classes.LocationPage_search} d-none d-md-flex align-items-center`}>
                                            <input type="search" name="" id="" placeholder='Newark coworking' className='font-lato text font-noraml' />
                                            <Image src={search_icon} alt="" />
                                        </div>
                                        <div className={`${classes.LocationPage_filterBtns} d-none d-md-flex`}>
                                            <FilterButtons page=""/>
                                        </div>
                                        <div className={`${classes.LocationPage_SortBtns} text-end d-none d-md-block`}>
                                            <SortBy />
                                        </div>
                                    </div>
                                    <div className={`${classes.LocationPage_card} ${classes.LocationPage_removepadding} homemmain_padding `}>
                                        <h6 className=" dark font-bold d-block d-md-none">Popular Locations</h6>
                                        <div className={`${classes.LocationPage_cardContain} d-none d-md-block`}>
                                            <LocationCard />
                                            <LocationCard />
                                            <LocationCard />
                                        </div>
                                        <div className="d-flex d-md-none">
                                            <div className={`row flex-nowrap overflow-x-scroll ${classes.Roomcards_padding}`}>
                                                {/* <div className={`${classes.RoomSpaces_roomcard} no-wrap`}> */}
                                                <div className='col-md-3 max-content'>  <Roomcard page=""/> </div>
                                                <div className='col-md-3 max-content'>  <Roomcard page=""/> </div>
                                                <div className='col-md-3 max-content'>  <Roomcard page=""/> </div>
                                                <div className='col-md-3 max-content'>  <Roomcard page=""/> </div>
                                            </div>
                                        </div>
                                        <div className={`${classes.LocationPage_closebtn} ${classes.LocationPage_closebtn_mobile} d-flex d-md-none justify-content-center`}>
                                            <button className='text font-bold text-white rounded-pill'>Close Map <RxCross2 className='text-white ' /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${classes.LocationPage_map_col} col-md-6 order-md-2 order-1 `}>
                                <div className={`${classes.LocationPage_rightdivider}`}>

                                    <div className={`${classes.LocationPage_map} ${classes.LocationPage_removepadding} position-relative`}>
                                        <Image src={map_image} alt="" className='w-100 h-100' />
                                        <div className={`${classes.LocationPage_fullscreen_icon} position-absolute`}>
                                            <Image src={full_screen_icon} alt="" className=' h-100' />
                                        </div>
                                        <div className={`${classes.LocationPage_closebtn} d-none d-md-flex position-absolute`}>
                                            <button className='text font-bold text-white rounded-pill'>Close Map <RxCross2 className='text-white ' /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LocationPage