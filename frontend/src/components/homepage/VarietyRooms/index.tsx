"use client"

import React from 'react';
import connect_icon from '@/assets/images/connect.svg';
import classes from './VarietRooms.module.css';
import confrance_room from '@/assets/images/confrence_room.svg';
import TourRequestCard from '../TourRequestCard';
import arrow_right_icon from '@/assets/images/arrow_right_icon.svg'
import Image from 'next/image';
import { GoArrowRight } from "react-icons/go";
// import { StrapiImage } from '../../custom/StrapiImage';
import { getStrapiMedia } from '@/data/utils';

function VarietyRooms({data}:any) {

  // console.log("111111111111",data)

  const {description,varietyroomsheading,varietyroomstitle,Varietyroomcard,button:{title,url,icon}} = data;

  return (
    <>

<section className="VarietRooms homemmain_padding">
       <div className="VarietRooms homemain_conatiner">
        <div className="row VarietRooms_row">
          <div className="col-lg-8">
            <div className="row varity_rooms">
              <div className="col connect_conatiner">
                <p className='dark'>
                 {description}
                </p>
                <button className='text_body font-bold'> <Image priority={true} src={getStrapiMedia(icon.url)} height={24} width={24} alt="" className=''/>{title}</button>
              </div>
            </div>
            <div className="row">
              <h3 className="heading_h3 Variet_Rooms_heading d-none d-md-block subtitle mb-3 dark font-lato font-bold">{varietyroomsheading}</h3>
            </div>
            <div className="row">
              <h4 className="heading_h4 Variet_Rooms_title d-none d-md-block font-bold dark">{varietyroomstitle}</h4>
              <h4 className="heading_h4 Variet_Rooms_title d-block d-md-none font-bold dark">Office Solutions</h4>
            </div>
            <div className="row cards_conatiner row-cols-md-3 ">
                {Varietyroomcard.map(({title,description,image}:any,index:number)=>(

                  <div className="col" key={`${index}_Varietyroomcard`}>
                <div className="card Variet_Rooms_cards">
                  <Image priority={true} src={getStrapiMedia(image.url)} width={178} height={176} className="card-img-top Variet_Rooms_card_image" alt="Conference Room" />
                  <div className="card-body">
                    <h5 className="heading_h5 card-title Variet_Rooms_card_title dark text_body font-bold">{title}</h5>
                    <p className="card-text Variet_Rooms_card_desc dark font-medium font-lato">{description}</p>
                  </div>
                </div>
              </div>
              ))}
              {/* <div className="col">
                <div className="card Variet_Rooms_cards">
                  <Image src={confrance_room} className="card-img-top Variet_Rooms_card_image" alt="Conference Room" />
                  <div className="card-body">
                    <h5 className="heading_h5 card-title Variet_Rooms_card_title dark text_body font-bold">Conference Room</h5>
                    <p className="card-text Variet_Rooms_card_desc dark font-medium font-lato">With more and</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card Variet_Rooms_cards">
                  <Image src={confrance_room} className="card-img-top Variet_Rooms_card_image" alt="Conference Room" />
                  <div className="card-body">
                    <h5 className="heading_h5 card-title Variet_Rooms_card_title dark text_body font-bold">Conference Room</h5>
                    <p className="card-text Variet_Rooms_card_desc dark font-medium font-lato">With more and</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card Variet_Rooms_cards">
                  <Image src={confrance_room} className="card-img-top Variet_Rooms_card_image" alt="Conference Room" />
                  <div className="card-body">
                    <h5 className="heading_h5 card-title Variet_Rooms_card_title dark text_body font-bold">Conference Room</h5>
                    <p className="card-text Variet_Rooms_card_desc dark font-medium font-lato">With more and</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card Variet_Rooms_cards">
                  <Image src={confrance_room} className="card-img-top Variet_Rooms_card_image" alt="Conference Room" />
                  <div className="card-body">
                    <h5 className="heading_h5 card-title Variet_Rooms_card_title dark text_body font-bold">Conference Room</h5>
                    <p className="card-text Variet_Rooms_card_desc dark font-medium font-lato">With more and</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card Variet_Rooms_cards">
                  <Image src={confrance_room} className="card-img-top Variet_Rooms_card_image" alt="Conference Room" />
                  <div className="card-body">
                    <h5 className="heading_h5 card-title Variet_Rooms_card_title dark text_body font-bold">Conference Room</h5>
                    <p className="card-text Variet_Rooms_card_desc dark font-medium font-lato">With more and</p>
                  </div>
                </div>
              </div> */}
              {/* Repeat the above code block for other cards */}
            </div>
            <div className="see_solution d-md-none d-block">
              <p className='dark'>See all solutions <GoArrowRight /> </p></div>
          </div>
          <div className="col-lg-4 d-none d-md-block">
            {/* Assuming TourRequestCard is a component */}
            <TourRequestCard />
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

export default VarietyRooms;
