import React from 'react';
import Marquee from "react-fast-marquee";
// import { StrapiImage } from '@/components/custom/StrapiImage';
import Image from 'next/image';
import { getStrapiMedia } from '@/data/utils';
function MarqueeComponent({ direction, logoData }: any) {

  return (
    <div className='MarqueeComponent'>
      <Marquee direction={direction}>
        <div className="d-flex gap-3">
          {logoData.map((item: any, index: number) => (
            <Image 
              key={item.id}  
              src={getStrapiMedia(item.url)} 
              width={195} 
              height={195} 
              alt={item.alternativeText || 'Logo'} 
              priority={true}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default MarqueeComponent;
