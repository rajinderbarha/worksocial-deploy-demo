'use client';

import GoogleMap from 'google-maps-react-markers';
import { useRef, useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";

// Custom Marker Component
const CustomMarker = ({ lat, lng, icon, onClick }:any) => (
  <div
    style={{ position: 'absolute', transform: 'translate(-50%, -50%)', cursor: 'pointer' }}
    onClick={onClick}
  >
    {icon}
  </div>
);

export default function GoogleMapComponent({loc, mark, zoom}:any) {
  const mapRef:any = useRef(null);


  // console.log(loc);
  
  // console.log(mark);
  
  const{longitude,latitude} = loc

// Assuming `mark` is your array of location objects
const markedLoc = mark.map((item: any) => ({
  lng: parseFloat(item.longitude.trim()), // Trim spaces and parse to float
  lat: parseFloat(item.latitude.trim()),   // Trim spaces and parse to float
  icon: <FaLocationDot style={{ color: 'red', height: '50px', width: '50px' }} />
}));
  // console.log("$$$$$$$$$$$$$$$$$",markedLoc);

  
  

  const parsedLatitude = parseFloat(latitude);
  const parsedLongitude = parseFloat(longitude);
  // console.log(parsedLatitude);
  // console.log(parsedLongitude);
  
  // Define your static coordinates here
  const coordinates = [
    { lat: parsedLatitude, lng: parsedLongitude, icon: <FaLocationDot style={{ color: 'red', height: '50px', width: '50px' }}/> },
    // { lat: 45.4349041, lng: 12.3384522, icon: <FaLocationDot style={{ color: 'red', height: '50px', width: '50px' }}/>  }
  ];

  
  const onGoogleApiLoaded = ({ map, maps }:any) => {
    mapRef.current = map;
  };

  // const onMarkerClick = (e:any, { markerId, lat, lng }:any) => {
  //   // console.log('This is ->', markerId, lat, lng);
  //   mapRef.current.setCenter({ lat, lng });
  // };

  const mapOptions = (maps:any) => ({
    mapTypeId: maps.MapTypeId.SATELLITE,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: maps.ControlPosition.BOTTOM_CENTER
    },
    fullscreenControl: true,
    styles: [{
      featureType: "poi.business",
      stylers: [{ visibility: "on" }] // Toggle based on your preference
    }]
  });

  return (
   
      <div style={{height: "100%", width:'100%'}}>
      <GoogleMap
        apiKey="AIzaSyAFtCeCUYm6K1QXujT_m17aRvbC9hRxr2k"
        defaultCenter={{ lat: parsedLatitude, lng: parsedLongitude }}
        defaultZoom={zoom}
        options={mapOptions}
        mapMinHeight="100%"
        onGoogleApiLoaded={onGoogleApiLoaded}
      >
        {markedLoc.map(({ lat, lng, icon }:any, index:any) => (
          <CustomMarker
          key={index}
            lat={lat}
            lng={lng}
            icon={icon}
            // onClick={(e:any) => onMarkerClick(e, { markerId: `Marker ${index}`, lat, lng })}
          />
        ))}
      </GoogleMap>
            </div>
    
  );
}

