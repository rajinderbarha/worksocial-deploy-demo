import React from 'react'
import star_image from '@/assets/images/Starts.png'
import review_user_image from '@/assets/images/review_user_image.png'
import classes from  './ReviewCard.module.css'
import Image from 'next/image'
function ReviewCard() {
    return (
        <>
            <div className="ReviewCard">
                <div className="starimages">
                    <Image src={star_image} alt="" />
                </div>
                <div className="review_comment">
                    <p className='dark font-lato font-semibold'>The WorkSocial team is fantastic! They are professional, kind and courteous. They truly care about making your work expierence the best that it can be. The office is clean and the kitchen is always well stocked with healthy</p>
                </div>
                <div className="review_user d-flex align-items-center">
                    {/* <div className=""></div> */}
                    <Image src={review_user_image} alt="" className='review_user_image'/>
                    <div className="user_detail">
                        <h6 className='heading_h6 user_detail_name blue_dark font-bold'>Sally M.</h6>
                        <p className='user_detail_position subtitle font-medium'>CEO - Trainspotting</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewCard