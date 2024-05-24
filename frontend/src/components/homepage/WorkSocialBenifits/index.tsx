import React from 'react'
import classes from './WorkSocialBenifits.module.css'
import BenifitsCards from '../BenifitsCards'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
function WorkSocialBenifits({data}:any) {
  // console.log(data)
  const{text,title,heading,Benifit_Cards} = data 

  return (
    <>
     <section className="WorkSocialBenifits">
        <div className='homemmain_padding'>
          <div className="homemain_conatiner padding_for_align">
            
            <div className="WorkSocialBenifits_text ">
              <p className='grey_mid subtitle font-bold font-lato'>{text}</p>
              <h3 className='heading_h3 dark font-semibold'>{title}</h3>
              {/* <h5 className='heading_h5 grey_mid font-medium font-lato'>A <span className='font-bold'>Happiness</span> Company</h5> */}
              <div className='heading_h5 grey_mid font-medium font-lato'><BlocksRenderer  content={heading}/></div>
              
            </div>

            <div className="WorkSocialBenifits_cards row ">
              {Benifit_Cards?.map((card:any,index:number)=>(
                <div key={index} className='col-md-3'>
              <BenifitsCards card={card} />
              </div>
            ))}
             
            </div>
            <div className="d-flex d-md-none justify-content-center ">
              <button className="schedule_tour_btn orange_dark_background text_body font-bold">
                Schedule Tour
              </button>
            </div>
            {/* <div className="d-flex d-md-none flex-wrap justify-content-center reviews_div">
            <ReviewCard />
            <ReviewCard />
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default WorkSocialBenifits