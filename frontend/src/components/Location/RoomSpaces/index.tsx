import React from 'react';
import classes from './RoomSpaces.module.css';
import LocationRoomCard from '../LocationRoomCard';

function RoomSpaces({ roomSpaces, citySlug, stateSlug }: any) {
    return (
        <section className="RoomSpaces homemmain_padding">
            <div className="homemain_conatiner">
                <div className={classes.RoomSpaces_heading}>
                    <p className='subtitle font-bold grey_mid'>Rooms & Spaces</p>
                </div>
            </div>
            <div className="homemain_conatiner">
                <div className={`row flex-nowrap overflow-x-scroll ${classes.cards_padding}`}>
                    {roomSpaces.map((space: any, index: number) => (
                        <div className='col-md-3 max-content' key={index}>
                            <LocationRoomCard space={space} citySlug={citySlug} stateSlug={stateSlug} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default RoomSpaces;
