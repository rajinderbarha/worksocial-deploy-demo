import React from 'react'
import classes from  './ScaleYourBusiness.module.css'
import imagetext_componen_image from '@/assets/images/imagetext_componen_image.png'
import Image from 'next/image'
function ScaleYourBusiness() {
    return (
        <section className="ScaleYourBusiness homemmain_padding d-none d-md-block">
            <div className="homemain_conatiner">
                <div className="row align-items-center">
                    <div className="col-md-6 ScaleYourBusiness_left">
                        <div className="ScaleYourBusiness_image ">
                            
                            <Image src={imagetext_componen_image} alt="" className='w-100'/>
                        </div>
                    </div>
                    <div className="col-md-6 ScaleYourBusiness_right">
                        <div className="ScaleYourBusiness_text ms-auto">
                            <h2 className='heading_h2 dark font-medium'>Scale your business from startup to <span className='orange_dark'>global superpower</span></h2>
                            <p className='dark font-lato font-normal'>If you’re just starting out, or are an established business looking to expand, having a coworking space or shared office allows you to put your best foot forward and make a name for yourself in the business world. WorkSocial is the silent partner in your brand that allows you to get customizable space for rent near you in Jersey City. Join us and create the space you’ve always wanted, filled with ingenuity, innovation, and success. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ScaleYourBusiness