import React from 'react'
import classes from './FilterButtons.module.css'
import Image from 'next/image'
import filter_icon from '../../assets/images/filter_icon.svg'
import refresh from '../../assets/images/refresh.svg'
interface Props {
    page: string;
}
// function FilterButtons() {
const FilterButtons: React.FC<Props> = ({ page }) => {
    const pageName = page === "coworking";
    return (
        <>
            <div className={`${classes.filter_btns} d-flex flex-wrap ${pageName ?  `${classes.filter_btns_cowrking}`: '' }`}>
                <button className='dark text font-semibold d-flex align-items-center flex-nowrap'><Image src={filter_icon} alt="" /> Filters (2)</button>
                {pageName ? (
                    <>
                    <div className={`${classes.filter_btns_dropdown} d-none d-md-flex`}>
                        <select name="" id="" className='rounded-pill text font-normal dark_gray text-capitalize'>
                            <option value="" selected>Price</option>
                            <option value="">99</option>
                            <option value="">98</option>
                            <option value="">97</option>
                        </select>
                        <select name="" id="" className='rounded-pill text font-normal dark_gray text-capitalize'>
                            <option value="" selected>Categories</option>
                            <option value="">99</option>
                            <option value="">98</option>
                            <option value="">97</option>
                        </select>
                    </div>
                    <button className='dark_gray text font-noraml d-none d-md-flex align-items-center flex-nowrap'><Image src={refresh} alt="" />Clear All</button>
                    </>
                ) : (
                    <>
                    <div className={`${classes.filter_btns_dropdown}`}>
                        <select name="" id="" className='rounded-pill text font-normal dark_gray text-capitalize'>
                            <option value="" selected>Price</option>
                            <option value="">99</option>
                            <option value="">98</option>
                            <option value="">97</option>
                        </select>
                        <select name="" id="" className='rounded-pill text font-normal dark_gray text-capitalize'>
                            <option value="" selected>Categories</option>
                            <option value="">99</option>
                            <option value="">98</option>
                            <option value="">97</option>
                        </select>
                    </div>
                <button className='dark_gray text font-noraml d-flex align-items-center flex-nowrap'><Image src={refresh} alt="" />Clear All</button>
                </>
                )}
            </div>
        </>
    )
}

export default FilterButtons