import React from 'react'
import classes from  './TrustedByEnterprices.module.css'
import MarqueeComponent from '../MarqueeComponent'

function TrustedByEnterprices() {
  return (
    <>
    <section className="TrustedByEnterprices">
      <div className="homemmain_padding">
        <div className="homemain_conatiner">
            <h3 className='heading_h3 TrustedByEnterprices_heading dark font-semibold'>Trusted office solutions at all scales</h3>
            <p className='TrustedByEnterprices_desc dark font-normal font-lato'>We’re trusted by enterprise and and small businesses alike</p>
        </div>
        </div>
        <div className="marquee_component_contain d-flex flex-column gap-3">

        <MarqueeComponent direction="left"/>
        <MarqueeComponent direction="right"/>
        <MarqueeComponent direction="left"/>
        </div>
    </section>
    </>
  )
}

export default TrustedByEnterprices