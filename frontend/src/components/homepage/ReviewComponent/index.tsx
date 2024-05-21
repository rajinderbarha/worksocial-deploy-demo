import React from 'react'
import classes from  './ReviewComponent.module.css'
import ReviewCard from '../ReviewCard';
import Marquee from "react-fast-marquee";
import Image from 'next/image';
function ReviewComponent({data}:any) {
    // console.log(data);
    const{title,heading,Review_Card} = data
    return (
        <>
         

            <section className="ReviewComponent">
                <div className='ReviewComponent_image'>
                    
                </div>
                <div className="review_container review_container_inner">
                    <p className="ReviewComponent_title grey_mid text_body font-bold">{title}</p>
                    <h3 className="heading_h3 ReviewComponent_heading dark font-semibold">{heading}</h3>
                    </div>
                    <div className="reviewcard_contain row flex-nowrap  ">
                    </div>
                    
                    <Marquee className='reviewcard_contain'>
                        <div className="d-flex reviewcard_contain">
                         {Review_Card?.map((card:any,index:number)=>( 
                            <ReviewCard key={index} data={card}/>
                        ))} 
                        </div>
                    </Marquee>
                   
            </section>

        </>
    )
}

export default ReviewComponent