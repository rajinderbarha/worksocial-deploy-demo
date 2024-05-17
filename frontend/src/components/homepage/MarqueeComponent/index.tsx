import React from 'react'
import Marquee from "react-fast-marquee";
import JPMorgenChaseImage from '@/assets/images/JPMorgenChaseImage.svg'
import GoogleImage from '@/assets/images/GoogleImage.svg'
import classes from  './MarqueeComponent.module.css'
import Image from 'next/image';
function MarqueeComponent(props:any) {
  return (
    <>
    <div className='MarqueeComponent'>
      <Marquee direction={props.direction}>
        <div className="d-flex gap-3">

        <Image src={JPMorgenChaseImage} alt="" />
        <Image src={GoogleImage} alt="" />
        <Image src={JPMorgenChaseImage} alt="" />
        <Image src={GoogleImage} alt="" />
        <Image src={JPMorgenChaseImage} alt="" />
        <Image src={GoogleImage} alt="" />
        <Image src={JPMorgenChaseImage} alt="" />
        <Image src={GoogleImage} alt="" />
        </div>
      </Marquee>
      </div>
    </>
  )
}

export default MarqueeComponent