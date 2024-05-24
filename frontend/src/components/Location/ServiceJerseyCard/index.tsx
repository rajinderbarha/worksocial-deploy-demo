import React from 'react'
import confrance_room from '@/assets/images/confrence_room.svg';
import Image from 'next/image';
function ServiceJerseyCard() {
  return (
   <>
   <div className="card Services_JerseyCity_cards">
                  <Image src={confrance_room} className="card-img-top Services_JerseyCity_card_image" alt="Conference Room" />
                  <div className="card-body">
                    <h5 className="heading_h5 card-title Services_JerseyCity_card_title dark text_body font-bold">Conference Room</h5>
                    <p className="card-text Services_JerseyCity_card_desc dark font-medium font-lato">With more and</p>
                  </div>
                </div>
   </>
  )
}

export default ServiceJerseyCard