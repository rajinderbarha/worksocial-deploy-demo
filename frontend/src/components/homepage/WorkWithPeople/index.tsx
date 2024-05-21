import React from 'react'
import classes from './WorkWithPeople.module.css'
function WorkWithPeople({data}:any) {
    const{heading_left,heading_top,description} = data
    return (
        <>
            <section className="WorkWithPeople d-none d-md-block homemmain_padding">
            <div className=" homemain_conatiner">
                <div className="row ">
                    <div className="col-md-4 ">
                        <h2 className='heading_h2 col_left_title orange_dark font-medium'>{heading_left}</h2>
                    </div>
                    <div className="col-md-8 col_right">
                        <p className='col_right_heading dark font-lato font-bold'>{heading_top}</p>
                        <p className='col_right_desc dark font-lato font-normal'>{description}</p>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default WorkWithPeople