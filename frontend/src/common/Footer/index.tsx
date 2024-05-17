import React from 'react'
import classes from './Footer.module.css'
import footer_logo from '@/assets/images/logo-footer.svg'
import footer_links_pic from '@/assets/images/footer_links_pic.png'
import requestATour from '@/assets/images/requestATour.png'
import Image from 'next/image'
function Footer() {
    return (
        <section className="footer homemmain_padding">
            {/* <div className="requestImage_div">
            <img src={requestATour} alt="" />

            </div> */}
            <div className="homemain_conatiner">
                <div className="row">

                    <div className="col-md-4 footerlogo">
                        <Image src={footer_logo} alt="" />
                    </div>
                    <div className="col-md-8 footer_links">
                        <div className="row  footer_links_row">
                            <div className="col-md-3  ">
                                <h5 className='heading_h5 mid_light font-semibold font-lato'>Company</h5>
                                <div className=" row footer_link dark font-normal">
                                    <p>Get in Touch</p>
                                    <p>Request a Solution</p>
                                </div>
                            </div>
                            <div className="col-md-3 ">
                            <h5 className='heading_h5 mid_light font-semibold font-lato'>Support</h5>
                                <div className=" row footer_link dark font-normal">
                                    <p>Get in Touch</p>
                                    <p>Request a Solution</p>
                                </div>
                            </div>
                            <div className="col-md-3 ">
                            <h5 className='heading_h5 mid_light font-semibold font-lato'>Contact Us</h5>
                                <div className=" row footer_link dark font-normal">
                                    <p>support@domain.com</p>
                                    <p>1 (800) 888 2342</p>
                                </div>
                            </div>
                            {/* <div className="col-md-3">gg</div>
                            <div className="col-md-3">gg</div> */}
                        </div>
                    </div>
                </div>
                <div className="social_media_icons">
                    <div className="social_media_contain">
                        <p className='grey_mid text_body font-normal'>Follow us</p>
                        <div className="">
                            <Image src={footer_links_pic} alt="" />
                        </div>
                    </div>
                </div>
                <div className="footer_last_line d-flex justify-content-between">
                    <p className='dark font-medium font-lato'> © 2022 WorkSocial. All rights reserved. </p>
                    <div className="footerlastline_rightLinks d-flex font-normal">
                        <p className='dark'>Terms Of Service</p>
                        <p className='dark'>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer