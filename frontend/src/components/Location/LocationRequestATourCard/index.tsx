"use client"

import React, { useState } from 'react'
// import './RequestATourCard.css'
import los_angeles from '@/assets/images/drop_down_los_angle.svg';
import calender from '@/assets/images/calender.svg';
import time from '@/assets/images/time.svg';
import email from '@/assets/images/email.svg';
import person from '@/assets/images/person.svg';
import phone from '@/assets/images/phone.svg';
import arrow_right from '@/assets/images/arrow_right.svg';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa6";

function LocationRequestATourCard() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    // const options = [
    //     { key: 'coworking', label: 'Coworking Space', active: true },
    //     { key: 'conference', label: 'Conference Room', active: false },
    //     { key: 'office', label: 'Office Space', active: false },
    //     { key: 'office', label: 'Office Space', active: false },
    //     { key: 'office', label: 'Office Space', active: false },
    // ];
    const [options, setOptions] = useState([
        { key: 'coworking', label: 'Coworking Space', active: true },
        { key: 'conference', label: 'Conference Room', active: false },
        { key: 'office', label: 'Office Space', active: false },
        { key: 'shared', label: 'Shared Office', active: false },
        { key: 'general', label: 'General Interest', active: false },
      ]);
    
      const handleOptionClick = (clickedKey:any) => {
        const updatedOptions = options.map(option => {
          if (option.key === clickedKey) {
            return { ...option, active: true };
          } else {
            return { ...option, active: false };
          }
        });
        setOptions(updatedOptions);
      };
    return (
        <>
            <section className='RequestATourCard'>
                <div className="row RequestATourCard_conatiner shadow-lg">
                    <div className="col RequestATourCard_form_up">
                        {/* <div className="dropdown">
                            <button className="btn dropdown-toggle RequestATourCard_dropdown_component" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                <div className="RequestATourCard_dropdown_textImg d-flex align-items-center">
                                <img src={los_angeles} alt="Los Angeles" className="RequestATourCard_dropdown_img" />
                                <p>Los Angeles</p>
                                </div>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="#"><img src={los_angeles} alt="New York" className="RequestATourCard_dropdown_img" />New York</a></li>
                                <li><a className="dropdown-item" href="#"><img src={los_angeles} alt="Chicago" className="RequestATourCard_dropdown_img" />Chicago</a></li>
                                <li><a className="dropdown-item" href="#"><img src={los_angeles} alt="Houston" className="RequestATourCard_dropdown_img" />Houston</a></li>
                            </ul>
                        </div> */}
                        <div className="dropdown">
                            <button className="btn dropdown-toggle RequestATourCard_dropdown_component" type="button" id="dropdownMenuButton" onClick={toggleDropdown} aria-expanded={isOpen ? 'true' : 'false'}>
                                <div className="RequestATourCard_dropdown_textImg d-flex align-items-center">
                                    <Image src={los_angeles} alt="Los Angeles" className="RequestATourCard_dropdown_img" />
                                    <p className='font-lato font-bold'>Los Angeles</p>
                                </div>
                            </button>
                            <ul className={`dropdown-menu${isOpen ? ' show' : ''} RequestATourCard_cityoptions`} aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item font-lato" href="#"><Image src={los_angeles} alt="New York" className="RequestATourCard_dropdown_img" />New York</a></li>
                                <li><a className="dropdown-item font-lato" href="#"><Image src={los_angeles} alt="Chicago" className="RequestATourCard_dropdown_img" />Chicago</a></li>
                                <li><a className="dropdown-item font-lato" href="#"><Image src={los_angeles} alt="Houston" className="RequestATourCard_dropdown_img" />Houston</a></li>
                            </ul>
                        </div>

                        {/* <div className="d-flex  RequestATourCard_option_container">
                            {options.map((option) => (
                                <button
                                    key={option.key}
                                    className={`btn ${option.active ? 'btn-danger' : 'btn-light'} RequestATourCard_option_button ${option.active ? 'active' : ''} ${option.key}`}
                                >
                                    
                                    <div className={`RequestATourCard_icon_placeholder ${option.key}`}></div>
                                    <span>{option.label}</span>
                                </button>
                            ))}
                        </div> */}

<div className="d-flex  RequestATourCard_option_container">
      {options.map(option => (
        <button
          key={option.key}
          className={`btn ${option.active ? 'btn-danger' : 'btn-light'} RequestATourCard_option_button ${option.active ? 'active' : ''} ${option.key}`}
          onClick={() => handleOptionClick(option.key)}
        >
       
          <div className={`RequestATourCard_icon_placeholder ${option.key} ${option.active ? 'active' : ''}`}></div>
          <span className='font-lato font-bold'>{option.label}</span>
        </button>
      ))}
    </div>

                        <form className="RequestATourCard_form_container">
                            <div className="dateTime_field RequestATourCard_form_full_field">

                                <div className="input-group RequestATourCard_complete_input_field">
                                    <span className="input-group-text">
                                        <Image src={calender} alt="" />
                                    </span>
                                    <input type="text" className="form-control input_text_field text font-lato font-normal" placeholder="Date" />
                                </div>

                                <div className="input-group RequestATourCard_complete_input_field">
                                    <span className="input-group-text">
                                        <Image src={time} alt="" />
                                    </span>
                                    <input type="text" className="form-control input_text_field text font-lato font-normal" placeholder="1:00 PM" />
                                </div>
                            </div>

                            <div className="fullname_field RequestATourCard_form_full_field">

                                <div className="input-group RequestATourCard_complete_input_field">
                                    <span className="input-group-text">
                                        <Image src={person} alt="" />
                                    </span>
                                    <input type="text" className="form-control input_text_field text font-lato font-normal" placeholder="First Name" />
                                </div>
                                {/* <div className="input-group RequestATourCard_complete_input_field">
                                    <input type="text" className="form-control input_text_field text font-lato font-normal" placeholder="Last Name" />
                                </div> */}
                                <div className="input-group RequestATourCard_complete_input_field">
                                    <span className="input-group-text">
                                        <Image src={person} alt="" />
                                    </span>
                                    <input type="text" className="form-control input_text_field text font-lato font-normal" placeholder="Last Name" />
                                </div>
                            </div>

                            <div className="contact_field RequestATourCard_form_full_field">


                                <div className="input-group RequestATourCard_complete_input_field">
                                    <span className="input-group-text">
                                        <Image src={email} alt="" />
                                    </span>
                                    <input type="email" className="form-control input_text_field text font-lato font-normal" placeholder="Email" />
                                </div>

                                <div className="input-group RequestATourCard_complete_input_field">
                                    <span className="input-group-text">
                                        <Image src={phone} alt="" />
                                    </span>
                                    <input type="tel" className="form-control input_text_field text font-lato font-normal" placeholder="Phone" />
                                </div>
                            </div>

                            <button type="submit" className="btn submit_btn text_body font-bold">
                                Schedule Tour <FaArrowRight />
                            </button>
                        </form>

                    </div>
                </div>

            </section>
        </>
    )
}

export default LocationRequestATourCard