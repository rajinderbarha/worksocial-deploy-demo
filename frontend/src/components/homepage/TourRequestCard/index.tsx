import React, { useState } from 'react';
import classes from './TourRequestCard.module.css';
import los_angeles from '../../../assets/images/drop_down_los_angle.svg';
import calender from '@/assets/images/calender.svg';
import time from '@/assets/images/time.svg';
import email from '@/assets/images/email.svg';
import person from '@/assets/images/person.svg';
import phone from '@/assets/images/phone.svg';
import arrow_right from '@/assets/images/arrow_right.svg';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa6";




function TourRequestCard() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [options, setOptions] = useState([
    { key: 'coworking', label: 'Coworking Space', active: true },
    { key: 'conference', label: 'Conference Room', active: false },
    { key: 'office', label: 'Office Space', active: false },
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
  // const options = [
  //   { key: 'coworking', label: 'Coworking Space', active: true },
  //   { key: 'conference', label: 'Conference Room', active: false },
  //   { key: 'office', label: 'Office Space', active: false },
  // ];

  return (
    <section className="container compelete_TourRequestCard">
      <div className="row TourRequestTitle">
        <h2 className="heading_h2 TourRequest_title">Tour Request</h2>
      </div>
      <div className="row TourRequestCard shadow-lg">
        <div className="col TourRequestCard_form_up">
          <div className="dropdown">
            <button
              className="btn dropdown-toggle dropdown_component"
              type="button"
              id="dropdownMenuButton"
              onClick={toggleDropdown}
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <div className="dropdown_textImg d-flex align-items-center">
                <Image src={los_angeles} alt="Los Angeles" className="dropdown-img" />
                <p>Los Angeles</p>
              </div>
            </button>
            <ul className={`dropdown-menu${isOpen ? ' show' : ''} TourRequest_cityoptions`} aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item" href="#"><Image src={los_angeles} alt="New York" className="dropdown-img" />New York</a></li>
              <li><a className="dropdown-item" href="#"><Image src={los_angeles} alt="Chicago" className="dropdown-img" />Chicago</a></li>
              <li><a className="dropdown-item" href="#"><Image src={los_angeles} alt="Houston" className="dropdown-img" />Houston</a></li>
            </ul>
          </div>

          {/* <div className="d-flex justify-content-between option_container">
            {options.map((option) => (
              <button
                key={option.key}
                className={`btn ${option.active ? 'btn-danger' : 'btn-light'} TourRequest_option_button ${option.active ? 'active' : ''} ${option.key}`}
              >
             
                <div className={`icon-placeholder ${option.key}`}></div>
                <span>{option.label}</span>
              </button>
            ))}
          </div> */}
 <div className="d-flex justify-content-between option_container">
      {options.map(option => (
        <button
          key={option.key}
          className={`btn ${option.active ? 'btn-danger' : 'lightest_form'} TourRequest_option_button ${option.active ? 'active' : ''} ${option.key}`}
          onClick={() => handleOptionClick(option.key)}
        >
          {/* Placeholder for icon */}
          <div className={`icon-placeholder ${option.key} ${option.active ? 'active' : ''}`}></div>
          <span className='font-lato font-bold'>{option.label}</span>
        </button>
      ))}
    </div>


          <form className="form_container">
            <div className="input-group complete_input_field">
              <span className="input-group-text">
                <Image src={calender} alt="" />
              </span>
              <input type="text" className="form-control input_text_field text font-lato font-normal" placeholder="Date" />
            </div>

            <div className="input-group complete_input_field">
              <span className="input-group-text">
                <Image src={time} alt="" />
              </span>
              <input type="text" className="form-control input_text_field text font-lato font-normal" placeholder="1:00 PM" />
            </div>

            <div className="input-group complete_input_field">
              <span className="input-group-text">
                <Image src={person} alt="" />
              </span>
              <input type="text" className="form-control input_text_field text font-lato font-normal" placeholder="Full Name" />
            </div>

            <div className="input-group complete_input_field">
              <span className="input-group-text">
                <Image src={email} alt="" />
              </span>
              <input type="email" className="form-control input_text_field text font-lato font-normal" placeholder="Email" />
            </div>

            <div className="input-group complete_input_field">
              <span className="input-group-text">
                <Image src={phone} alt="" />
              </span>
              <input type="tel" className="form-control input_text_field text font-lato font-normal" placeholder="Phone" />
            </div>

            <button type="submit" className="submit_btn text_body font-bold">
              Schedule Tour <FaArrowRight />


            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default TourRequestCard;
