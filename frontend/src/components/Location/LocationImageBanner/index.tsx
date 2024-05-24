import React from 'react'
import CarouselImage from '@/assets/images/Carousels image.png';
import classes from './LocationImageBanner.module.css'
import Image from 'next/image';

function LocationImageBanner({ stateName }:any) {
    console.log(stateName);
    
    return (
        <>
            <section className={`${classes.LocationImageBanner}`}>
                <div className="homemmain_padding">

                    <div className="slider_conatiner">
                        <div className={`${classes.LocationImageBanner} position-relative`}>
                            <Image src={CarouselImage} className="d-block w-100 h-100" alt="..." />
                            <div className={`${classes.LocationImageBanner_caption}  position-absolute`}>
                                <h1 className='heading_h1 text-white font-semibold'>WorkSocial {stateName.StateName} City</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LocationImageBanner
