import React from 'react'
import classes from './SortBy.module.css'

function SortBy() {
    return (
        <>
            <div className={`${classes.SortBy}`}>

                <select name="" id="" className='rounded-pill text font-normal dark_gray text-capitalize'>
                    <option value="" selected>Sort by Price</option>
                    <option value="">Sort by category</option>
                    <option value="">Sort by Price</option>
                    <option value="">Sort by category</option>
                </select>
            </div>
        </>
    )
}

export default SortBy