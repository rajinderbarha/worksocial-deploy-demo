import React from 'react';
import classes from  './GetEveryThing.module.css';
import worksocial_Image from '@/assets/images/worksocial_Image.png';
import Image from 'next/image';
// import { StrapiImage } from '@/components/custom/StrapiImage';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { getStrapiMedia } from '@/data/utils';

function GetEveryThing({data}:any) {
  // console.log("bdshkf00000000000000000000",data)

  const {smalldescription,image,heading} = data
  // get

  return (
    <section className=" GetEveryThing container-fluid GetEveryThing_container d-md-block d-none">
      <div className="row align-items-center">
        <div className="col-md-6 image_container">
          <Image priority={true} src={getStrapiMedia(image.url)} width={715} height={475} alt="Meeting Room" />
        </div>
        <div className="col text_container">
          <p className='font-normal font-lato dark'>
           {smalldescription}
          </p>
          {/* <h2> */}
          <BlocksRenderer content={heading} />
            {/* <span className='font-medium dark'>you also get</span> <span className='main_heading font-normal orange_dark'>everything you could ever want.</span> */}
          {/* </h2> */}
        </div>
      </div>
    </section>
  );
}

export default GetEveryThing;