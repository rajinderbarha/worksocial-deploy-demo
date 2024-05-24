import React from 'react';
import classes from './RequestATour.module.css';
import RequestATourCard from '../RequestATourCard';
import { getStrapiMedia } from '@/data/utils';

function RequestATour({ data }: any) {
    // console.log(data);
    const { title, description, image: { url, alternativeText } } = data;
    const bgImage = {
        backgroundImage: `url('${getStrapiMedia(url)}')`, // Ensure the URL is wrapped with `url()`
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        padding: '200px 16px 0 16px',
        borderRadius: '0 216px 216px 0',
        marginBottom: '187px',
        marginTop: '-175px',
    };

    return (
        <>
            <section className={`position-relative`} style={bgImage}>
                <div className="homemain_conatiner">
                    <div className="row">
                        <div className="col-md-5 RequestATour_text">
                            <h3>{title}</h3>
                            <p className='font-lato font-semibold'>{description}</p>
                        </div>
                        <div className="col-md-7">
                            <div className="card_div">
                                <RequestATourCard />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default RequestATour;
