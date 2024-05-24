import React from 'react'
import classes from  './BenifitsCards.module.css'
import benifits_person from '@/assets/images/benifits_person.svg'
import benifit_mug from '@/assets/images/benifit_mug.svg'
import Image from 'next/image'
import { getStrapiMedia } from '@/data/utils'
function BenifitsCards({card}:any) {
    const{title,description,image:{url,alternativeText}} = card
    return (
        <>
           <div className="BenifitsCards">
                <div className="BenifitsCards_image_container">
                    <Image  src={getStrapiMedia(url)} width={80} height={80} alt={alternativeText || "Benefits image not found"} />
                </div>
                <div className="BenifitsCards_heading ">
                    <h6  className='font-lato font-bold'>{title}</h6>
                </div>
                <div className="BenifitsCards_description dark_gray">
                    <p className='font-normal  font-lato'>{description}</p>
                </div>
            </div>
        </>
    )
}

export default BenifitsCards