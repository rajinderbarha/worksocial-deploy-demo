import React from 'react'
import classes from  './RequestATour.module.css'
// import TourRequestCard from '../TourRequestCard/TourRequestCard'
import RequestATourCard from '../RequestATourCard'
function RequestATour() {
    return (
        <>
            <section className='RequestATour position-relative'>
                <div className="homemain_conatiner">
                    <div className="row">
                        <div className="col-md-5 RequestATour_text">
                            <h3>Request a Tour</h3>
                            <p className='font-lato font-semibold'>We look forward to seeing you soon!</p>
                        </div>
                        <div className="col-md-7">
                            <div className=" card_div ">
                                
                            <RequestATourCard />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RequestATour