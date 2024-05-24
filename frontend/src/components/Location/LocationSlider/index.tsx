import React, { useState, useEffect } from 'react';
// import './Slider.css';
// import CarouselImage from '../../assets/images/sliderImage1.png';
import CarouselImage from "@/assets/images/Carousels image.png"
import Image from 'next/image';

function LocationSlider() {
 
  return (
    <>
 <div id="carouselExampleCaptions" className="carousel slide carousel_container slider_conatiner homemmain_padding" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image src={CarouselImage} className="d-block w-100" alt="..." />
          <div className="carousel-caption ">
          <h1 className='heading_h1 font-semibold'>WorkSocial Jersey City</h1>
          </div>
        </div>
        {/* <div className="carousel-item">
          <Image src={CarouselImage} className="d-block w-100" alt="..." />
          <div className="carousel-caption ">
          <h1 className='heading_h1 font-semibold'>WorkSocial Jersey City</h1>
          </div>
        </div>
        <div className="carousel-item">
          <Image src={CarouselImage} className="d-block w-100" alt="..." />
          <div className="carousel-caption ">
          <h1 className='heading_h1 font-semibold'>Join Now And Start Being <br/> Social At Work Again</h1>
          </div>
        </div> */}
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

    <div className="slider_text mobile_main_conatiner">
          <h1 className='heading_h1 dark .font-bold'>Join Now And Start Being Social At Work Again</h1>
          </div>
</div>


      {/* <div className="carousel_container full_conatiner">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={CarouselImage} className="d-block w-100" alt="First slide" />
              <div className="overlay"></div>
              <div className="carousel-caption">
                <h5>Join Now And Start Being <br/> Social At Work Again</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={CarouselImage}className="d-block w-100" alt="Second slide" />
              <div className="overlay"></div>
              <div className="carousel-caption">
                <h5>Join Now And Start Being <br/> Social At Work Again</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={CarouselImage} className="d-block w-100" alt="Third slide" />
              <div className="overlay"></div>
              <div className="carousel-caption">
                <h5>Join Now And Start Being <br/> Social At Work Again</h5>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default LocationSlider;

