import React from 'react'
import star_image from '@/assets/images/Starts.png'
import review_user_image from '@/assets/images/review_user_image.png'
import classes from  './ReviewCard.module.css'
import Image from 'next/image'
import StarRating from '@/components/custom/StarRating/StarRating'
// import { StrapiImage } from '@/components/custom/StrapiImage'
import { getStrapiMedia } from '@/data/utils'
function ReviewCard({data}:any) {
    const{description,role,name,profileImg:{url,alternativeText}} = data
    return (
        <>
        {}
            <div className="ReviewCard">
                <div className="starimages">
                    <Image src={star_image} alt="" />
                    {/* <StarRating /> */}
                </div>
                <div className="review_comment">
                    <p className='dark font-lato font-semibold'>{description}</p>
                </div>
                <div className="review_user d-flex align-items-center">
                    {/* <div className=""></div> */}
                    <Image  priority={true} src={getStrapiMedia(url)} width={42} height={43} alt={alternativeText || "profileImg"} className='review_user_image'/>
                    <div className="user_detail">
                        <h6 className='heading_h6 user_detail_name blue_dark font-bold'>{name}</h6>
                        <p className='user_detail_position subtitle font-medium'>{role}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewCard