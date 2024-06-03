// import React from 'react'
// import classes from './Roomcard.module.css'
// import location_long_room from '@/assets/images/location_long_room.png'
// import table_chair from '@/assets/images/table_chair.svg'
// import projector from '@/assets/images/projector.svg'
// import breakfast from '@/assets/images/breakfast.svg'
// import bookroom_check_icon from '@/assets/images/bookroom_check_icon.svg'
// import Image from 'next/image'
// // import { StrapiImage } from '@/components/custom/StrapiImage'
// import { BlocksRenderer } from '@strapi/blocks-react-renderer';
// import { getStrapiMedia } from '@/data/utils';

// function Roomcard({ carddata }: any) {
//     console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@", carddata);

//     const { spaceName, image, ameneties: { data }, price, duration, bookitBtn: { title, url } } = carddata;
//     const amenityIconData = data.map((item: any, index: number) => (
//         item.amenetyIcon.data
//     ))
//     const amenityIcon = amenityIconData.flat().map((icon: any, index: number) => (
//         icon
//     ))

//     return (
//         <>
//             <div className="Roomcard">
//                 <div className="Roomcard_cover_image">
//                     <Image src={getStrapiMedia(image.data[0].url)} width={267} height={156} alt="" />
//                 </div>
//                 <div className="card_details  d-flex justify-content-center gap-3">
//                     <div className="left_detail  d-flex flex-column justify-content-between">
//                         <p className='font-lato font-bold'>{spaceName}</p>
//                         <div className="icons d-flex gap-0">
//                             {amenityIcon?.slice(0, 3).map((icon: any, index: number) => (
//                                 <Image key={index} src={getStrapiMedia(icon.url)} width={24} height={24} alt="" />
//                             ))}

//                         </div>
//                     </div>
//                     <div className="right_detail  d-flex flex-column align-items-end">
//                         <div className="right_detail_text ">
//                             <p className='pricetext '>Starting at</p>
//                             <h5 className='heading_h5 price dark_gray font-lato font-semibold'>${price}<span className='subtitle font-semibold font-lato'>{duration}</span></h5>
//                         </div>
//                         <button className='orange_dark_background d-flex font-bold text'>{title} <Image src={bookroom_check_icon} alt="" /> </button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Roomcard





import React from 'react'
// import './Roomcard.css'
import location_long_room from '@/assets/images/location_long_room.png'
import table_chair from '@/assets/images/table_chair.svg'
import projector from '@/assets/images/projector.svg'
import breakfast from '@/assets/images/breakfast.svg'
import bookroom_check_icon from '@/assets/images/bookroom_check_icon.svg'
import Image from 'next/image'
interface Props {
    page: string;
}

// function Roomcard() {
const Roomcard: React.FC<Props> = ({ page }) => {
    const pageName = page === "coworking";
    return (
        <>
            <div className="Roomcard">
                <div className="Roomcard_cover_image">
                    <Image src={location_long_room} alt="" />
                </div>
                <div className="card_details  d-flex justify-content-center gap-3">
                    <div className="left_detail  d-flex flex-column justify-content-between">
                        {pageName ? (
                            <>
                             {/* {/ <h6 className='grey_mid font-bold'>Great Neck, NY</h6> /} */}
                            </>
                        ) : (
                            <></>
                        )}
                        <p className='font-lato font-bold'>The Long Room</p>
                        <div className="icons d-flex gap-0">
                            <Image src={table_chair} alt="" />
                            <Image src={projector} alt="" />
                            <Image src={breakfast} alt="" />
                        </div>
                    </div>
                    <div className="right_detail  d-flex flex-column align-items-end">
                        <div className="right_detail_text ">
                            <p className='pricetext '>Starting at</p>
                            <h5 className='heading_h5 price dark_gray font-lato font-semibold'>$99<span className='subtitle font-semibold font-lato'></span></h5>
                        </div>
                        <button className='orange_dark_background d-flex font-bold text'>Book <Image src={bookroom_check_icon} alt="" /> </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Roomcard
