import React from 'react'
import classes from  './ScaleYourBusiness.module.css'
import imagetext_componen_image from '@/assets/images/imagetext_componen_image.png'
import Image from 'next/image'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import { getStrapiMedia } from '@/data/utils'
function ScaleYourBusiness({Data}:any) {
    // console.log(Data )

    const{description,heading,image:{data}}  = Data
    return (
        <section className="ScaleYourBusiness homemmain_padding d-none d-md-block">
            <div className="homemain_conatiner">
                <div className="row align-items-center">
                    <div className="col-md-6 ScaleYourBusiness_left">
                        <div className="ScaleYourBusiness_image ">
                            
                            <Image src={getStrapiMedia(data[0].url)} width={665} height={657} alt="" className='w-100'/>
                        </div>
                    </div>
                    <div className="col-md-6 ScaleYourBusiness_right">
                        <div className="ScaleYourBusiness_text ms-auto">
                            {/* <h2 className='heading_h2 dark font-medium'>Scale your business from startup to <span className='orange_dark'>global superpower</span></h2> */}
                          <div className='heading_h2 dark font-medium'>
                           <BlocksRenderer   content={heading} />
                          </div>
                            <p className='dark font-lato font-normal'>{description} </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ScaleYourBusiness