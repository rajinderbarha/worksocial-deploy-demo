import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getStrapiMedia } from '@/data/utils';
import bookroom_check_icon from '@/assets/images/bookroom_check_icon.svg';

function LocationRoomCard({ space, citySlug, stateSlug }: any) {
    const { spaceName, slug, image, ameneties: { data }, price, duration, bookitBtn: { title } } = space;
    const amenityIconData = data.map((item: any) => item.amenetyIcon.data).flat();
    const amenityIcon = amenityIconData.map((icon: any) => icon);

    return (
        <Link style={{textDecoration: 'none'}} href={`/locations/${stateSlug}/${citySlug}/${slug}`} passHref>
            <div className="Roomcard">
                <div className="Roomcard_cover_image">
                    <Image src={getStrapiMedia(image.data[0].url)} width={267} height={156} alt="" />
                </div>
                <div className="card_details d-flex justify-content-center gap-3">
                    <div className="left_detail d-flex flex-column justify-content-between">
                        <p className='font-lato font-bold'>{spaceName}</p>
                        <div className="icons d-flex gap-0">
                            {amenityIcon.slice(0, 3).map((icon: any, index: number) => (
                                <Image key={index} src={getStrapiMedia(icon.url)} width={24} height={24} alt="" />
                            ))}
                        </div>
                    </div>
                    <div className="right_detail d-flex flex-column align-items-end">
                        <div className="right_detail_text">
                            <p className='pricetext'>Starting at</p>
                            <h5 className='heading_h5 price dark_gray font-lato font-semibold'>${price}<span className='subtitle font-semibold font-lato'>{duration}</span></h5>
                        </div>
                        <button className='orange_dark_background d-flex font-bold text'>{title} <Image src={bookroom_check_icon} alt="" /></button>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default LocationRoomCard;
