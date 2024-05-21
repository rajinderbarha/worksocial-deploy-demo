import React from 'react'
import classes from './WorkTogether.module.css'
import working_promo_image from '@/assets/images/working_promo_image.png';
import Image from 'next/image';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
// import { StrapiImage } from '@/components/custom/StrapiImage';
import { getStrapiMedia } from '@/data/utils';
function WorkTogether({data}:any) {
    const{heading,description,image:{url}} = data
    return (
        <>
            <section className="WorkTogether position-relative homemmain_padding d-none d-md-block">
                <div className=" homemain_conatiner">
                    <div className='row'>
                    <div className="col-md-6 ">
                        <div className="WorkTogether_text ">
                        {/* <h2 className='heading_h2 heading dark font-medium'>
                            When we work together, <span className='orange_dark'> we create amazing things. </span>
                        </h2> */}
                        <BlocksRenderer content={heading} />
                        {/* <p className='description font-lato font-normal dark'>The office space we offer in New Jersey and around the country comes with a variety of options for all collaborative workplace needs. As we leave our homes and reenter the world, we want to safely set ourselves up for success. That means creating creative solutions to the office experience. All teams want to collaborate, create, and construct a future filled with success.

                            <span>  This is a new world we’re in, and your office should reflect just that.</span>
                        </p> */}
                    <BlocksRenderer content={description} />
                    </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
                </div>
                <div className="WorkTogether_image position-absolute">
                <Image priority={true} src={getStrapiMedia(url)} alt="" width={787} height={531} className=''/>

                </div>
            </section>
        </>
    )
}

export default WorkTogether