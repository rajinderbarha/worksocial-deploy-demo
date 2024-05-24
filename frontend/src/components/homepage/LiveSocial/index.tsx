import React from 'react'
import arrow_right_icon from '@/assets/images/arrow_right_icon.svg'
import classes from  './LiveSocial.module.css'
import LiveSocial_image_text from '../LiveSocial_image_text'
import LiveSocialCard from '../LiveSocialCard'
import Image from 'next/image'
import { GoArrowRight } from "react-icons/go";
function LiveSocial({data}:any) {
    // console.log(data)
    const{title,heading,link} =  data;
    return (
        <>
            <section className="LiveSocial homemmain_padding">
                <div className="homemain_conatiner">
                    <div className="live_social_heading">
                        <p className='mid_light text_body font-bold d-none d-md-block' >{title}</p>
                        <div className="live_social_heading_link d-flex align-items-center justify-content-between">
                            <h3 className='heading_h3 dark font-semibold'>{heading}</h3>
                            <p className='d-none d-md-flex'><a href={link.url} className='dark_gray font-normal'>{link.title} <GoArrowRight /> </a></p>
                        </div>
                    </div>
                    <div className="LiveSocial_image d-none d-md-block">

                        <LiveSocial_image_text />
                    </div>
                    <div className="LiveSocial_card_conatin ">
                        <div className='row nowrap'>
                            <div className='col-md-4 max-content'>
                                <LiveSocialCard />
                            </div>
                            <div className='col-md-4 max-content'>
                                <LiveSocialCard />
                            </div>
                            <div className='col-md-4 max-content'>
                                <LiveSocialCard />
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default LiveSocial