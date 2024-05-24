import React from 'react'
import classes from './RoomSpaces.module.css'
// import Roomcard from '../Roomcard'
import Roomcard from '@/components/homepage/Roomcard'
import LocationRoomCard from '../LocationRoomCard'
function RoomSpaces() {
    return (
        <section className="RoomSpaces homemmain_padding">
            <div className="homemain_conatiner">
                <div className={`${classes.RoomSpaces_heading}`}>
                    <p className='subtitle font-bold grey_mid'>Rooms & Spaces</p>
                </div>
                </div>
                <div className="homemain_conatiner     ">
          <div className={`row flex-nowrap overflow-x-scroll ${classes.cards_padding}`}>
            {/* {/ <div className={`${classes.RoomSpaces_roomcard} no-wrap`}> /} */}
          <div className='col-md-3 max-content'>  <LocationRoomCard /> </div>
          <div className='col-md-3 max-content'>  <LocationRoomCard /> </div>
          <div className='col-md-3 max-content'>  <LocationRoomCard /> </div>
          <div className='col-md-3 max-content'>  <LocationRoomCard /> </div>
          </div>
          </div>
          {/* {/ </div> /} */}
            
        </section>
    )
}

export default RoomSpaces