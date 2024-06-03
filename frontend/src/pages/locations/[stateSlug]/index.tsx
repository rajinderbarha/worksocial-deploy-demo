

import React from 'react';
import BottomCards from "@/components/Location/BottomCards";
import LocationRequestATour from "@/components/Location/LocationRequestATour";
import LocationSlider from "@/components/Location/LocationSlider";
import RoomSpaces from "@/components/Location/RoomSpaces";
import ServicesJerseyCity from "@/components/Location/ServicesJerseyCity";
import LocationImageBanner from "@/components/Location/LocationImageBanner";
import { getLocationData, getNavigationData } from "../../../../lib/strapiQuery";
import Link from 'next/link';

// Define types for better type safety
interface Space {
    id: string;
    spaceName: string;
}

interface City {
    citySlug: URL;
    id: string;
    CityName: string;
    space: {
        data: Space[];
    };
}

interface State {
    stateSlug: string;
    StateName: string;
    cities: {
        data: City[];
    };
}

interface LocationData {
    data: State[];
}

interface HeaderData {
    block: {
        // Locations: {
            states: {
                data: State[];
            };
        // };
    }[];
}

interface Props {
    locationData: LocationData;
    headerData: HeaderData;
    stateSlug: string;
}

// Separate components for clarity
// const CityList: React.FC<{ cities: City[] }> = ({ cities }) => (
//     <div className="city-list">
//         {cities.map((city) => (
//             <div key={city.id} className="city-item">
//                 <h3>{city.CityName}</h3>
//                 <div className="office-list">
//                     <h4>Offices in {city.CityName}</h4>
//                     {city.space.data.map((space) => (
//                         <div key={space.id} className="office-item">
//                             <h5>{space.spaceName}</h5>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         ))}
//     </div>
// );

const States: React.FC<Props> = ({ locationData, headerData, stateSlug }) => {
    // console.log("State Slug:", stateSlug);
    // console.log("Header Data:", headerData);
    // console.log("Location Data:", locationData);

    const statesData = headerData.block?.[0]?.states?.data || [];
    const selectedState = statesData.find((state) => state.stateSlug === stateSlug);

    if (!selectedState) {
        console.error("Selected state not found", stateSlug);
        return <div>Error: Selected state not found</div>;
    }
    // console.log("Selected State:", selectedState);

    const selectedStateData = locationData.data.find((state) => state.stateSlug === selectedState.stateSlug);
// console.log(selectedStateData);

    if (!selectedStateData) {
        console.error("Selected state data not found", selectedState.stateSlug);
        return <div>Error: Selected state data not found</div>;
    }
    // console.log("Selected State Data:", selectedStateData);

    return (
        <div className="locations">
            {selectedStateData && (
                <>
                
                {selectedStateData.cities.data.map((city,index)=>(
                        <Link key={index} href={`${selectedStateData.stateSlug}/${city.citySlug}`}>{city.CityName}</Link>
                ))}
                    {/* <LocationImageBanner stateName={selectedStateData} />
                    <ServicesJerseyCity />
                    <RoomSpaces />
                    <LocationRequestATour />
                    <BottomCards /> */}
                    {/* <h2>Cities in {selectedStateData.StateName}</h2>
                    <CityList cities={selectedStateData.cities.data} /> */}
                </>
            )}
        </div>
    );
};

export default States;

export const getServerSideProps = async ({ params }: any) => {
    const { stateSlug } = params;
    const locationData = await getLocationData();
    const headerData = await getNavigationData();

    return {
        props: {
            locationData,
            headerData,
            stateSlug,
        },
    };
};



// import React from 'react'

// const States = () => {
//   return (
//     <div>States</div>
//   )
// }

// export default States