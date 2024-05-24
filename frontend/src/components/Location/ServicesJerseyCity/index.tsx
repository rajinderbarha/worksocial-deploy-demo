"use client"

import React from 'react';
import connect_icon from '@/assets/images/connect.svg';
// import './ServicesJerseyCity.css';
import confrance_room from '@/assets/images/confrence_room.svg';
import TourRequestCard from '@/components/homepage/TourRequestCard';
import arrow_right_icon from '@/assets/images/arrow_right_icon.svg'
import Image from 'next/image';
import { GoArrowRight } from "react-icons/go";
import ServiceJerseyCard from '../ServiceJerseyCard';

function ServicesJerseyCity() {
  return (
    <>
<section className="ServicesJerseyCity homemmain_padding">
       <div className="ServicesJerseyCity homemain_conatiner">
        <div className="row ServicesJerseyCity_row">
          <div className="col-lg-8">
            <div className="row Services_container">
              <div className="col connect_conatin">
              <h4 className="heading_h4 Services_JerseyCity_title d-none d-md-block font-bold font-lato dark">Reimagine your business in an office space without a long term lease</h4>
                <p className='dark font-medium subtitle font-lato'>Whether you’re an established enterprise or a growing startup. Our coworking spaces and shared office solutions have the right service mix for your office space. WorkSocial™ wants to be your coworking space partner!
                </p>
                
              </div>
            </div>
            <div className="row">
              <h3 className=" text-uppercase d-none d-md-block text_body mb-3 grey_mid  font-bold">Services in Jersey City</h3>
            </div>
            <div className="row">
              {/* <h4 className="heading_h4 Services_JerseyCity_title d-none d-md-block font-bold dark">Find a  variety of options fit just for you at WorkSocial</h4>
              <h4 className="heading_h4 Services_JerseyCity_title d-block d-md-none font-bold dark">Office Solutions</h4> */}
            </div>
            <div className="row cards_conatiner row-cols-md-2 ">
              <div className="col">
                {/* <div className="card Services_JerseyCity_cards">
                  <Image src={confrance_room} className="card-img-top Services_JerseyCity_card_image" alt="Conference Room" />
                  <div className="card-body">
                    <h5 className="heading_h5 card-title Services_JerseyCity_card_title dark text_body font-bold">Conference Room</h5>
                    <p className="card-text Services_JerseyCity_card_desc dark font-medium font-lato">With more and</p>
                  </div>
                </div> */}
                <ServiceJerseyCard />
              </div>
              <div className="col">
                {/* <div className="card Services_JerseyCity_cards">
                  <Image src={confrance_room} className="card-img-top Services_JerseyCity_card_image" alt="Conference Room" />
                  <div className="card-body">
                    <h5 className="heading_h5 card-title Services_JerseyCity_card_title dark text_body font-bold">Conference Room</h5>
                    <p className="card-text Services_JerseyCity_card_desc dark font-medium font-lato">With more and</p>
                  </div>
                </div> */}
                <ServiceJerseyCard />
              </div>
              <div className="col">
                {/* <div className="card Services_JerseyCity_cards">
                  <Image src={confrance_room} className="card-img-top Services_JerseyCity_card_image" alt="Conference Room" />
                  <div className="card-body">
                    <h5 className="heading_h5 card-title Services_JerseyCity_card_title dark text_body font-bold">Conference Room</h5>
                    <p className="card-text Services_JerseyCity_card_desc dark font-medium font-lato">With more and</p>
                  </div>
                </div> */}
                <ServiceJerseyCard />
              </div>
              <div className="col">
                {/* <div className="card Services_JerseyCity_cards">
                  <Image src={confrance_room} className="card-img-top Services_JerseyCity_card_image" alt="Conference Room" />
                  <div className="card-body">
                    <h5 className="heading_h5 card-title Services_JerseyCity_card_title dark text_body font-bold">Conference Room</h5>
                    <p className="card-text Services_JerseyCity_card_desc dark font-medium font-lato">With more and</p>
                  </div>
                </div> */}
                <ServiceJerseyCard />
              </div>
              {/* {/ Repeat the above code block for other cards /} */}
            </div>
            <div className="see_solution d-md-none d-block">
              <p className='dark'>See all solutions <GoArrowRight /> </p></div>
          </div>
          <div className="col-lg-4 d-none d-md-block">
            {/* {/ Assuming TourRequestCard is a component /} */}
            <TourRequestCard />
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

export default ServicesJerseyCity;
