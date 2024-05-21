import React from 'react'
import classes from  './ExpandYourBussiness.module.css'
import imagetext_component_image from '@/assets/images/imagetext_component_image.png'
import Image from 'next/image'
import { getStrapiMedia } from '../../../data/utils';
function ExpandYourBussiness({data}:any) {
  console.log(data)
  const{heading1,heading2,heading3,description,image:{url}} = data
  return (
    <>
      <section className="ExpandYourBussiness d-none d-md-block homemmain_padding">
        <div className="homemain_conatiner ">
          <div className='row'>
          <div className="col-md-6  align-self-center">
            <div className=" ExpandYourBussiness_text   ">
              <div className="upper_heading">
                <h5 className='heading_h5 dark font-bold font-lato'>{heading1}</h5>
                <h4 className='heading_h4 dark font-bold '>{heading2}. </h4>
                <h2 className='heading_h2 orange_dark font-medium'>{heading3}</h2>
              </div>
              <div className="ExpandYourBussiness_description">
                <p className='dark font-lato font-medium'>{description}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="ExpandYourBussiness_image">
              <Image  src={getStrapiMedia(url)} width={665} height={549} alt="" />
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default ExpandYourBussiness