import React from 'react'
import classes from  './LiveSocialCard.module.css'
import Livesocial_card_image from '@/assets/images/Livesocial_card_image.png'
import Image from 'next/image'
function LiveSocialCard() {
    return (
        <>
            <div className="LiveSocialCard">
                <div className="LiveSocialCard_image">
                    <Image src={Livesocial_card_image} alt="" className='w-100'/>
                </div>
                <div className="LiveSocialCard_text">
                    <div className="LiveSocialCard_text_title d-flex align-items-center font-lato">
                        <p className='LiveSocialCard_heading mid_light subtitle font-bold'>Coworking</p>
                        <p className='grey_mid '>.</p>
                        <p className='LiveSocialCard_time grey_mid subtitle font-medium'>12 min read</p>
                    </div>
                    <h5 className='heading_h5 LiveSocialCard_text_heading dark font-lato font-bold'>Setting a Tone</h5>
                    <p className='LiveSocialCard_text_description font-normal font-lato'>For five years, we have offered flexible solutions that match our individual working needs. Our mission is to provide a workspace that </p>
                    <div className="LiveSocialCard_text_duration">
                        <p className="grey_mid font-normal font-lato">1 month ago</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LiveSocialCard