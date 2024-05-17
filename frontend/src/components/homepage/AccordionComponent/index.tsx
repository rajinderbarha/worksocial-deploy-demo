import React from 'react'
import classes from './AccordionComponent.module.css'

function AccordionComponent() {
  return (
    <>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="heading_h2 accordion-header">
      <button className="accordion-button blue_dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <h6 className='heading_h6 font-semibold font-lato'>Why should I book with you?</h6>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body text font-lato font-normal">
      Our proposition is simple: we scour the world for the best and most kid-friendly luxury hotels, and make them easy for you to find and book. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="heading_h2 accordion-header">
      <button className="accordion-button collapsed blue_dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <h6 className='heading_h6 font-semibold font-lato'>Why should I book with you?</h6>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body text font-lato font-normal">
      Our proposition is simple: we scour the world for the best and most kid-friendly luxury hotels, and make them easy for you to find and book. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="heading_h2 accordion-header">
      <button className="accordion-button collapsed blue_dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <h6 className='heading_h6 font-semibold font-lato'>Why should I book with you?</h6>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body text font-lato font-normal">
      Our proposition is simple: we scour the world for the best and most kid-friendly luxury hotels, and make them easy for you to find and book. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="heading_h2 accordion-header">
      <button className="accordion-button collapsed blue_dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      <h6 className='heading_h6 font-semibold font-lato'>Why should I book with you?</h6>
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body text font-lato font-normal">
      Our proposition is simple: we scour the world for the best and most kid-friendly luxury hotels, and make them easy for you to find and book. 
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default AccordionComponent