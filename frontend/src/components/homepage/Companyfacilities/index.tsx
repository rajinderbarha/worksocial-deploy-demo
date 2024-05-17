import React from 'react';
import classes from  './Companyfacilities.module.css';
import work_from_office from '@/assets/images/work from office.svg'
import collaborative_space from '@/assets/images/collaborative space.svg'
import award from '@/assets/images/award.svg'
import Image from 'next/image';
import { StrapiImage } from '@/components/custom/StrapiImage';

function Companyfacilities({data}:any) {
  console.log(data)
  return (
    <section className="Companyfacilities homemain_conatiner Companyfacilities_container d-md-flex d-none">
      <div className="d-flex justify-content-md-around flex-wrap w-100">
        {data.map(({title,image:{data}}:any,index:number)=>(

          <div className="" key={index}>
          <div className="Companyfacilities_card_container work_from_office">
            <div className="Companyfacilities_image_container">
              <StrapiImage src={data[0].url} width={144} height={144} alt="Work From An Office" />
            </div>
            <p className='facility_text text_body font-bold dark_gray'>{title}</p>
          </div>
        </div>
        ))}
        {/* <div className="">
          <div className="Companyfacilities_card_container collaborative_space">
            <div className="Companyfacilities_image_container">
              <Image src={collaborative_space} alt="Create a Collaborative Space" />
            </div>
            <p className='facility_text  text_body font-bold dark_gray'>Create a Collaborative Space</p>
          </div>
        </div>
        <div className="">
          <div className="Companyfacilities_card_container award">
            <div className="Companyfacilities_image_container">
              <Image src={award} alt="Work, Engage, Win" />
            </div>
            <p className='facility_text  text_body font-bold dark_gray'>Work, Engage, Win</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Companyfacilities;
