import React from 'react'
import classes from  './FAQComponent.module.css'
import accordion_image from '@/assets/images/accordion_image.png'
import accordion_figma from '@/assets/images/accordion_figma.png'
import requestATour from '@/assets/images/requestATour.png'
import AccordionComponent from '../AccordionComponent'
import Image from 'next/image'

function FAQComponent() {
    return (
        <>
           
            <section className="FAQComponent position-relative">
                <div className="homemain_conatiner ">
                    <div className=" FAQComponent_row ">
                        <div className='row'>
                        <div className="col-md-7 p-0 FAQComponent_left">
                            <div className="FAQComponent_text">
                                <p className='grey_mid text_body font-bold'>You’ve got questions?</p>
                                <h3 className='heading_h3 font-semibold'>FAQs Have Answers</h3>
                            </div>
                            {/* <img src={accordion_figma} alt="" className='accordion_figma_image' /> */}
                            <AccordionComponent />
                        </div>
                        <div className="col-md-6 FAQComponent_right ">

                            {/* <div className="FAQComponent_image position-relative ms-auto d-none d-md-block ">
                            <Image src={accordion_image} alt="" />
                                
                            </div> */}
                        </div>
                        </div>
                    </div>
                    <div className="FAQComponent_image position-absolute  d-none d-md-block ">
                            <Image src={accordion_image} alt="" />
                                
                            </div>
                </div>

            </section>
        </>
    )
}

export default FAQComponent