"use client";

import React, { useState, useRef, useEffect } from "react";
import classes from "./Header.module.css";
import logo from "@/assets/images/logo.svg";
import search_icon from "@/assets/images/search.svg";
import menu_icon from '@/assets/images/menu_icon.svg';
import Image from "next/image";
import { StrapiImage } from "@/components/custom/StrapiImage";
import { getStrapiMedia } from '../../data/utils';
import Link from "next/link";

function Header({ headerData }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [collapseHeight, setCollapseHeight] = useState('0px');
  const collapseRef: any = useRef(null);

  useEffect(() => {
    setCollapseHeight(isMenuOpen ? `${collapseRef.current.scrollHeight}px` : '0px');
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { block } = headerData;
  const linksData = block[0].Links;
  const Locations = block[0].Locations;
  const { states: { data } } = Locations;
  console.log(data);

  return (
    <>
      <nav className="navbar navbar-expand-lg homemmain_padding">
        <div className="nav_conatiner mx-auto d-flex justify-content-between container">
          <a className="navbar-brand" href="#">
            <Image src={getStrapiMedia(block[0].logo.url)} height={52} width={213} alt="" className="logo_image" />
          </a>
          <div className="menubtn_seachIcon_container d-flex align-items-center">
            <Image src={getStrapiMedia(block[0].searchIcon.url)} height={24} width={24} alt="" className="search_icon_mobile " />
            <button
              className="navbar-toggler p-0 border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              onClick={toggleMenu} aria-expanded={isMenuOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <Image src={menu_icon} alt="" />
            </button>
          </div>
          <div className={`collapse navbar-collapse  ${isMenuOpen ? 'show' : ''}`} ref={collapseRef} style={{ maxHeight: `${collapseHeight}`, transition: 'max-height 0.3s ease-in-out' }}>
            <div className=" ms-auto d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav_links">
                <li className="nav-item">
                  <div className="dropdown">
                    <button className="  grey_mid  text_body font-semibold bg-transparent border-0" type="button" data-bs-toggle="dropdown" >
                      Location
                    </button>
                    <ul className="dropdown-menu">
                      {data?.map((state: any, index: number) => (
                        <li key={index}>
                          <Link href={`/locations/${state.slug}`} className="dropdown-item">
                            {state.StateName}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                {linksData.map(({ url, title }: any, index: number) => (
                  <li className="nav-item" key={`${index}_linksData`}>
                    <a className="grey_mid text_body font-semibold" aria-current="page" href={url}>
                      {title}
                    </a>
                  </li>
                ))}
                <Image src={getStrapiMedia(block[0].searchIcon.url)} height={24} width={24} alt="" className="search_icon_desktop" />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
