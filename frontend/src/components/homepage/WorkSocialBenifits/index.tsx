import React from 'react'
import classes from './WorkSocialBenifits.module.css'
import BenifitsCards from '../BenifitsCards'
function WorkSocialBenifits() {
  return (
    <>
     <section className="WorkSocialBenifits">
        <div className='homemmain_padding'>
          <div className="homemain_conatiner padding_for_align">
            
            <div className="WorkSocialBenifits_text ">
              <p className='grey_mid subtitle font-bold font-lato'>Benefits of</p>
              <h3 className='heading_h3 dark font-semibold'>WorkSocial</h3>
              <h5 className='heading_h5 grey_mid font-medium font-lato'>A <span className='font-bold'>Happiness</span> Company</h5>
            </div>

            <div className="WorkSocialBenifits_cards row ">
              <div className='col-md-3'>
              <BenifitsCards />
              </div>
              <div className='col-md-3'>
              <BenifitsCards />
              </div>
              <div className='col-md-3'>
              <BenifitsCards />
              </div>
              <div className='col-md-3'>
              <BenifitsCards />
              </div>
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