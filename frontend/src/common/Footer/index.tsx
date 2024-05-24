import React from 'react'
import classes from './Footer.module.css'
import footer_logo from '@/assets/images/logo-footer.svg'
import footer_links_pic from '@/assets/images/footer_links_pic.png'
import requestATour from '@/assets/images/requestATour.png'
import Image from 'next/image'
import { getStrapiMedia } from '@/data/utils'
import Link from 'next/link'
function Footer({ footerData }: any) {
    // console.log(footerData);

    const { block, socialIcons, links ,copyrightText,copyrightLink} = footerData;
    const { logo, FooterComponent } = block[0];
    const { socialIconLinks } = socialIcons[0];
    

    return (
        <section className="footer homemmain_padding">
            {/* <div className="requestImage_div">
            <img src={requestATour} alt="" />

            </div> */}
            <div className="homemain_conatiner">
                <div className="row">

                    <div className="col-md-4 footerlogo">
                        <Image src={getStrapiMedia(logo.url)} width={346} height={84} alt="" />
                    </div>
                    <div className="col-md-8 footer_links">
                        <div className="row  footer_links_row">
                            {FooterComponent?.map(({ heading, links }: any, index: number) => (

                                <div className="col-md-3  " key={index}>
                                    <h5 className='heading_h5 mid_light font-semibold font-lato'>{heading}</h5>
                                    {links.map(({ id, title, url }: any) => ((
                                        <div className=" row footer_link dark font-normal" key={id}>
                                            <p>{title}</p>
                                            {/* <Link href={url}> <p>{title}</p> </Link>            // we comment it just because the syle is not ok for link  */}
                                        </div>
                                    )))}
                                </div>
                            ))}

                            {/* <div className="col-md-3 ">
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
                            </div> */}


                            {/* <div className="col-md-3">gg</div>
                            <div className="col-md-3">gg</div> */}
                        </div>
                    </div>
                </div>

                <div className="social_media_icons">
                    <div className="social_media_contain ">
                        <p className='grey_mid m-0 mb-2 text_body font-normal'>{socialIcons[0].title}</p>
                        <div className='d-flex gap-2'>
                            {socialIconLinks?.map(({ id, url, Image: { data } }: any) => (

                                <div key={id} >
                                    <Link href={url}>
                                        {data.map((item: any, index: number) => (
                                           
                                                <Image
                                                    key={index}
                                                    src={getStrapiMedia(item.url)}

                                                    height={24}
                                                    width={24}
                                                    alt={item.alternativeText || 'Social Icon'}  // Provide a meaningful alt text
                                                />
                                           
                                        ))}
                                    </Link>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>




               

                    <div className="footer_last_line d-flex w-full justify-content-between">
                    <p className='dark font-medium font-lato'>{copyrightText} </p>
                    <div className="footerlastline_rightLinks d-flex font-normal">
                    {links?.map(({id,title,url}:any)=>(
                        <p key={id} className='dark'>{title}</p>
                    ))}
                    </div>
                </div>
              
            </div>
        </section>
    )
}

export default Footer