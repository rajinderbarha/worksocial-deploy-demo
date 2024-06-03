import React, { useState } from 'react';
import classes from './JerseyLongRoom.module.css';
import Image from 'next/image';
import { getStrapiMedia } from '@/data/utils';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import jersey_city_map from "@/assets/images/jersey_city_map.png"
import GoogleMapComponent from '../GoogleMapComponent';
// import MapLocations from '../MapLocations';


function JerseyLongRoom({ space }: any) {
    // console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^",space);
    
    const { address, description, slug, roomNo, spaceName, price, duration, image, ameneties: { data }, bookitBtn: { title, url }, SpaceLocation, } = space;

    const amenities = data.map((item: any) => ({
        title: item.title,
        icons: item.amenetyIcon.data.map((icon: any) => icon)
    }));


    console.log("fffffffffffffff",SpaceLocation);
    




    const [showAllAmenities, setShowAllAmenities] = useState(false);

    return (
        <>
            <section className={`${classes.JerseyLongRoom}`}>
                <div className={`row gx-0`}>
                    <div className="col-md-8">
                        <div className={`${classes.JerseyLongRoom_left}`}>
                            <div className={`${classes.JerseyLongRoom_title} ${classes.JerseyLongRoom_left_container} dark`}>
                                <h5 className="heading_h5 font-bold">{spaceName}</h5>
                                <p className='font-normal font-lato'>{roomNo}</p>
                            </div>
                            <div className={`${classes.JerseyLongRoom_description} ${classes.JerseyLongRoom_left_container} dark`}>
                                <p className="font-lato font-medium">{description}</p>
                            </div>
                            <div className={`${classes.JerseyLongRoom_amenities}`}>
                                <p className={`${classes.JerseyLongRoom_left_container} font-lato mid_light`}>Amenities</p>

                                <div className={`${classes.JerseyLongRoom_amenities_buttons} d-flex flex-wrap`}>
                                    {showAllAmenities ? (
                                        amenities.map((amenity: any, index: number) =>
                                            amenity.icons.map((icon: any, iconIndex: number) => (
                                                <button key={iconIndex} className='blue_dark rounded-pill light_green d-flex align-items-center font-bold font-lato'>
                                                    <Image src={getStrapiMedia(icon.url)} width={24} height={24} alt="" />
                                                    {amenity.title}
                                                </button>
                                            ))
                                        )
                                    ) : (
                                        amenities.slice(0, 4).map((amenity: any, index: number) =>
                                            amenity.icons.map((icon: any, iconIndex: number) => (
                                                <button key={iconIndex} className='blue_dark rounded-pill light_green d-flex align-items-center font-bold font-lato'>
                                                    <Image src={getStrapiMedia(icon.url)} width={24} height={24} alt="" />
                                                    {amenity.title}
                                                </button>
                                            ))
                                        )
                                    )}
                                </div>

                                <div className={`${classes.JerseyLongRoom_data} ${classes.JerseyLongRoom_left_container}`}>
                                    <button className='font-lato dark_gray font-bold subtitle border-0 bg-transparent' onClick={() => setShowAllAmenities(!showAllAmenities)}>
                                        {showAllAmenities ? 'Less' : 'More..'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`${classes.JerseyLongRoom_right}`}>
                            <div className={`${classes.JerseyLongRoom_map_image}`} >
                                {/* <Image src={jersey_city_map} alt='' /> */}
                                <GoogleMapComponent  loc={SpaceLocation} mark={[SpaceLocation]} zoom={18}/>
                            </div>
                            <div className={`${classes.JerseyLongRoom_map_locaton} d-flex `}>
                                <address className='dark font-medium font-lato text'>
                                    <BlocksRenderer content={address} />
                                </address>

                            </div>
                            <button className='orange_dark_background text-white rounded-pill font-bold text_body'>{title}</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default JerseyLongRoom;
