import React from 'react'
import classes from  './LiveSocial_image_text.module.css'
import livesocial_image1 from '@/assets/images/livesocial_image1.png'
import Image from 'next/image'

function LiveSocial_image_text() {
    return (
        <>
            <div className="LiveSocial_image_text overflow-hidden">
                <div className="row align-items-center">
                    <div className="col-md-6 LiveSocial_image_text_left">
                        <div className="LiveSocial_imagetext_image">
                            <Image src={livesocial_image1} alt="" className='w-100'/>
                        </div>
                    </div>
                    <div className="col-md-6 LiveSocial_image_text_right">
                        <div className="LiveSocial_imagetext_text">
                            <div className="LiveSocial_imagetext_text_title d-flex align-items-center">
                                <p className='LiveSocial_heading mid_light subtitle font-bold font-lato'>Coworking</p>
                                <p className='grey_mid '>.</p>
                                <p className='LiveSocial_time grey_mid subtitle font-medium font-lato'>12 min read</p>
                            </div>
                            <h4 className='heading_h4 dark font-bold'>Work How You Want, Live How You Want</h4>
                            <p className="LiveSocial_imagetext_text_description font-normal font-lato">For five years, we have offered flexible solutions that match your individual working needs. Our mission is to provide a workspace that supports small business endeavors, community outreach, mentoring, and entrepreneurial needs while promoting a well and happy lifestyle </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LiveSocial_image_text