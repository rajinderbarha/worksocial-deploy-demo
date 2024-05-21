import React from 'react'
import classes from './Roomcard.module.css'
import location_long_room from '@/assets/images/location_long_room.png'
import table_chair from '@/assets/images/table_chair.svg'
import projector from '@/assets/images/projector.svg'
import breakfast from '@/assets/images/breakfast.svg'
import bookroom_check_icon from '@/assets/images/bookroom_check_icon.svg'
import Image from 'next/image'
// import { StrapiImage } from '@/components/custom/StrapiImage'
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { getStrapiMedia } from '@/data/utils'

function Roomcard({ carddata }: any) {
    // console.log("######", carddata)

    const { office, bookbtn:{title,url,icon}} = carddata

    // console.log(title,url,icon)

    // console.log(office.map((item: any) => item))

    // title      price
    return (
        <>
            {office.map(({ image: { data }, icons, price }: any, index: number) => (
               
        <div key={`${index}_office`} className='col-md-3 max-content'>
                <div key={index} className="Roomcard">
                    <div className="Roomcard_cover_image">
                        <Image priority={true} src={getStrapiMedia(data[0].url)} width={267} height={156} alt="" />
                    </div>
                    <div className="card_details  d-flex justify-content-center gap-3">
                        <div className="left_detail  d-flex flex-column justify-content-between">
                            <p className='font-lato font-bold'>The Long Room</p>
                            <div className="icons d-flex gap-0">

                                {icons.data.map((img: any, index: number) => (
                                    <Image priority={true} key={`${index}_icons`} src={getStrapiMedia(img.url)} height={24} width={24} alt={''} />
                                ))}
                                {/* <Image src={table_chair} alt="" />
                                    <Image src={projector} alt="" />
                                    <Image src={breakfast} alt="" /> */}
                            </div>
                        </div>
                        <div className="right_detail  d-flex flex-column align-items-end">
                            <div className="right_detail_text ">
                                {/* <p className='pricetext '>Starting at</p>
                                <h5 className='heading_h5 price dark_gray font-lato font-semibold'>$99<span className='subtitle font-semibold font-lato'></span></h5> */}
                                <BlocksRenderer content={price} />
                            </div>
                            <button className='orange_dark_background d-flex font-bold text'>{title} <Image src={getStrapiMedia(icon.url)} height={25} width={24} alt="" /> </button>
                        </div>
                    </div>
                </div>
                </div>
            ))}
        </>
    )
}

export default Roomcard