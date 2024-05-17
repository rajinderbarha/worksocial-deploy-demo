import React from 'react'
import classes from  './ExpandYourBussiness.module.css'
import imagetext_component_image from '@/assets/images/imagetext_component_image.png'
import Image from 'next/image'
function ExpandYourBussiness() {
  return (
    <>
      <section className="ExpandYourBussiness d-none d-md-block homemmain_padding">
        <div className="homemain_conatiner ">
          <div className='row'>
          <div className="col-md-6  align-self-center">
            <div className=" ExpandYourBussiness_text   ">
              <div className="upper_heading">
                <h5 className='heading_h5 dark font-bold font-lato'>Rent Customized Office Space.</h5>
                <h4 className='heading_h4 dark font-bold '>Co-work With Likeminded People. </h4>
                <h2 className='heading_h2 orange_dark font-medium'>Expand Your Business</h2>
              </div>
              <div className="ExpandYourBussiness_description">
                <p className='dark font-lato font-medium'>Go back to work in an office that has a brand-new vibe, filled with social engagement, fun, and collaborative creativity. WorkSocial is here to help you give your employees everything they need to make this year the most successful yet. Going back to work is an adjustment, so why not make it as fun and beautiful as possible, surrounded by smart, engaging people in your field, and beautiful views of all that nature have to offer. We promise it’s so much better than your living room…</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="ExpandYourBussiness_image">
              <Image src={imagetext_component_image} alt="" />
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default ExpandYourBussiness