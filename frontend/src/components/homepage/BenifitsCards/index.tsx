import React from 'react'
import classes from  './BenifitsCards.module.css'
import benifits_person from '@/assets/images/benifits_person.svg'
import benifit_mug from '@/assets/images/benifit_mug.svg'
import Image from 'next/image'
function BenifitsCards() {
    return (
        <>
           <div className="BenifitsCards">
                <div className="BenifitsCards_image_container">
                    <Image src={benifits_person} alt="" />
                </div>
                <div className="BenifitsCards_heading ">
                    <h6  className='font-lato font-bold'>Create a New Version of Yourself</h6>
                </div>
                <div className="BenifitsCards_description dark_gray">
                    <p className='font-normal  font-lato'>How can we help you to become a better version of yourself?</p>
                </div>
            </div>
        </>
    )
}

export default BenifitsCards