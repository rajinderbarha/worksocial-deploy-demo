import React from 'react'
// import './RequestATour.css'
// import TourRequestCard from '../TourRequestCard/TourRequestCard'
// import RequestATourCard from '../RequestATourCard'
import classes from './LocationRequestATour.module.css'
import LocationRequestATourCard from '../LocationRequestATourCard'

function RequestATour() {
    return (
        <>
            <section className={`${classes.location_request_component} RequestATour position-relative`}>
                <div className="homemain_conatiner">
                    <div className="row">
                        <div className="col-md-5 RequestATour_text">
                            <h3>Request a Tour</h3>
                            <p className='font-lato font-semibold'>We look forward to seeing you soon!</p>
                        </div>
                        <div className="col-md-7">
                            <div className=" card_div ">
                                
                            <LocationRequestATourCard />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RequestATour