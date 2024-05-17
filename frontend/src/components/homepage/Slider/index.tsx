import React from 'react';
import classes from './Slider.module.css';

import { StrapiImage } from '@/components/custom/StrapiImage';

function Slider({ data }: any) {
    const { Slidersec } = data;

    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide carousel_container slider_container homemmain_padding" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {Slidersec.map((_: any, index: number) => (
                        <button key={`${index}_Slidersec`}
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to={index}
                                className={index === 0 ? "active" : ""}
                                aria-current={index === 0 ? "true" : undefined}
                                aria-label={`Slide ${index + 1}`}></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {Slidersec.map(({ sliderimg, title }: any, index: number) => (
                        <div key={`${index}_bgImage`} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <StrapiImage
                                alt="Background"
                                className="absolute object-cover w-full h-full"
                                height={1364}
                                src={sliderimg.url}
                                width={530}
                            />
                            <div className="carousel-caption ">
                                <h1 className='heading_h1 font-semibold'>{title}</h1>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="homemmain_padding">
                <div className="slider_text mobile_main_container">
                    <h1 className='heading_h1 dark .font-bold'>{Slidersec[0].title}</h1>
                </div>
            </div>
        </>
    );
}

export default Slider;
