import React from 'react'
import classes from  './TrustedByEnterprices.module.css'
import MarqueeComponent from '../MarqueeComponent'

function TrustedByEnterprices({data}:any) {

  const {heading, smallldesc, logo} = data;

  return (
    <>
      <section className="TrustedByEnterprices">
        <div className="homemmain_padding">
          <div className="homemain_conatiner">
            <h3 className='heading_h3 TrustedByEnterprices_heading dark font-semibold'>{heading}</h3>
            <p className='TrustedByEnterprices_desc dark font-normal font-lato'>{smallldesc}</p>
          </div>
        </div>
        <div className="marquee_component_contain d-flex flex-column gap-3">
          {logo.map((logoItem: any, index: number) => (
            <MarqueeComponent
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
              logoData={logoItem.logo.data}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default TrustedByEnterprices
