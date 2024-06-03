import Image from 'next/image'
import React from 'react'
import classes from './ImageGallary.module.css'
// import jersey_city_gallery_imge_1 from '../../../assets/images/jersey_city_gallery_imge_1.png'
// import jersey_city_gallery_imge_2 from '../../assets/images/jersey_city_gallery_imge_2.png'
// import jersey_city_gallery_imge_3 from '../../assets/images/jersey_city_gallery_imge_3.png'
// import jersey_city_gallery_imge_4 from '../../assets/images/jersey_city_gallery_imge_4.png'
// import jersey_city_gallery_imge_5 from '../../assets/images/jersey_city_gallery_imge_5.png'
// import photos_icon from '../../assets/images/photos_icon.svg'
import { getStrapiMedia } from '../../../data/utils';

function ImageGallary({ space }: any) {
    // console.log(space);

    const { image } = space

    const slicedImages = image.data.slice(1, 5).map((img: any, index: number) => (
        img
    ))

    // console.log(slicedImages);

    const imagesLength = image.data.length

    return (
        <>
            <section className={`${classes.ImageGallary}`}>
                <div className="">
                    <div className={`${classes.imageGallary_first_section} row gx-0 position-relative`}>
                        <div className={`${classes.imageGallary_first_cols} col-md-6`}>
                            <Image src={getStrapiMedia(image.data[0].url)} height={326} width={486} alt='' />
                        </div>
                        <div className={`col-md-6`}>
                            <div className={`${classes.imageGallary_second_section} row gx-0 row-cols-md-2 `}>
                                {slicedImages?.map((img: any, index: number) => (
                                    <div key={index} className={` ${classes.imageGallary_second_section_image1} col`}>
                                        <Image src={getStrapiMedia(img.url)} width={248} height={159} alt='' />

                                    </div>
                                ))}


                            </div>
                            <button className={`${classes.imageGallary_button} d-flex align-items-center lightest_form rounded-pill position-absolute`}>
                                {/* <Image src={photos_icon} alt=''/> */}
                                <p className={`subtitle dark font-bold font-lato`}>All Photos ({imagesLength})</p>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ImageGallary