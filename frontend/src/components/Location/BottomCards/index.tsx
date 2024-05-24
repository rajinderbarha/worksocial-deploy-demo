import React from 'react'
import BenifitsCards from '@/components/homepage/BenifitsCards'
import LocationBenifitsCards from '../LocationBenifitsCards'
function BottomCards() {
  return (
   <section>
<div className='homemmain_padding'>
          <div className="homemain_conatiner ">
    <div className="WorkSocialBenifits_cards row justify-content-center">
              <div className='col-md-3'>
              <LocationBenifitsCards />
              </div>
              <div className='col-md-3'>
              <LocationBenifitsCards />
              </div>
              <div className='col-md-3'>
              <LocationBenifitsCards />
              </div>
              <div className='col-md-3'>
              <LocationBenifitsCards />
              </div>
            </div>
            </div>
            </div>
   </section>
  )
}

export default BottomCards