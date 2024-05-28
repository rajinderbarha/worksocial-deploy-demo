// // import BottomCards from "@/components/Location/BottomCards"
// // import LocationRequestATour from "@/components/Location/LocationRequestATour"
// // import LocationSlider from "@/components/Location/LocationSlider"
// // import RoomSpaces from "@/components/Location/RoomSpaces"
// // import ServicesJerseyCity from "@/components/Location/ServicesJerseyCity"
// // import LocationImageBanner from "@/components/Location/LocationImageBanner"
// // import { getLocationData, getNavigationData } from "../../../lib/strapiQuery"

// // function States({ locationData ,headerData}: any) {
// //     console.log(headerData)
// //     // Assuming you have a state to track the selected state, let's call it selectedState
// //     // const selectedState = "New-Jersey"; // Assuming New Jersey is selected initially
// // console.log(locationData);

// // const{Locations:{states:data}} = headerData.block[0]
// // console.log(data);


// // const selectedState  =  data.data.find((state:any)=> state.stateSlug)
// // console.log(selectedState);


// //     // Find the selected state's data
// //     const selectedStateData = locationData.data.find((state: any) => selectedState.stateSlug ===state.stateSlug  );

// //     console.log(selectedStateData);

// //     return (
// //         <>
// //             <div className="locations">
// //                 {/* Conditionally render components based on the selected state */}
// //                 {selectedStateData && (
// //                     <>
// //                         <LocationImageBanner stateName={selectedStateData} />
// //                         <ServicesJerseyCity />
// //                         <RoomSpaces />
// //                         <LocationRequestATour />
// //                         <BottomCards />
// //                     </>
// //                 )}
// //             </div>
// //         </>
// //     )
// // }

// // export default States


// // export const getServerSideProps = async ({
// //     params,
// //   }: {
// //     params: { stateSlug: string };
// //   }) => {

// //     const { stateSlug } = params;
// //     const locationData = await getLocationData()
// //     const headerData  =  await getNavigationData()
// //     return {
// //         props: {
// //             locationData,headerData
// //         }
// //     }
// // }




// import BottomCards from "@/components/Location/BottomCards";
// import LocationRequestATour from "@/components/Location/LocationRequestATour";
// import LocationSlider from "@/components/Location/LocationSlider";
// import RoomSpaces from "@/components/Location/RoomSpaces";
// import ServicesJerseyCity from "@/components/Location/ServicesJerseyCity";
// import LocationImageBanner from "@/components/Location/LocationImageBanner";
// import { getLocationData, getNavigationData } from "../../../lib/strapiQuery";

// function States({ locationData, headerData, stateSlug }:any) {           // this page shows the data of the city inside the selected state from the navbar 
//     console.log(headerData);
//     console.log(locationData);

//     const { Locations: { states: { data } } } = headerData.block[0];
//     console.log(data);

//     // Find the selected state using the stateSlug from the URL params
//     const selectedState = data.find((state:any) => state.stateSlug === stateSlug);
//     console.log(selectedState);

//     // Find the selected state's data
//     const selectedStateData = locationData.data.find((state:any) => selectedState.stateSlug === state.stateSlug);
//     console.log(selectedStateData);

//     return (
//         <>
//             <div className="locations">
//                 {/* Conditionally render components based on the selected state */}
//                 {selectedStateData && (
//                     <>
//                         <LocationImageBanner stateName={selectedStateData} />
//                         <ServicesJerseyCity />
//                         <RoomSpaces />
//                         <LocationRequestATour />
//                         <BottomCards />
//                     </>
//                 )}
//             </div>
//         </>
//     );
// }

// export default States;

// export const getServerSideProps = async ({ params }:any) => {
//     const { stateSlug } = params;
//     const locationData = await getLocationData();
//     const headerData = await getNavigationData();
//     return {
//         props: {
//             locationData,
//             headerData,
//             stateSlug
//         }
//     };
// };










import BottomCards from "@/components/Location/BottomCards";
import LocationRequestATour from "@/components/Location/LocationRequestATour";
import LocationSlider from "@/components/Location/LocationSlider";
import RoomSpaces from "@/components/Location/RoomSpaces";
import ServicesJerseyCity from "@/components/Location/ServicesJerseyCity";
import LocationImageBanner from "@/components/Location/LocationImageBanner";
import { getLocationData, getNavigationData } from "../../../../lib/strapiQuery";

function States({ locationData, headerData, citySlug }: any) {
    console.log(citySlug);
    
    console.log(headerData);
    console.log(locationData);

    const { Locations: { states: { data} } } = headerData.block[0];
        const CitiesData =  locationData.data[0].cities.data;
        console.log((CitiesData));
        

    // Find the selected state using the stateSlug from the URL params
    const selectedCity = CitiesData.find((city: any) => city.citySlug === citySlug);
    console.log(selectedCity);

    // Find the selected state's data
    const selectedStateData = locationData.data.cities.data.find((state: any) => selectedCity.citySlug === state.stateSlug);
    // console.log(selectedStateData);
    
    // Render the city and office data
    return (
        <>
            <div className="locations">
                {/* Conditionally render components based on the selected state */}
                {/* {selectedStateData && (
                    <>
                        <LocationImageBanner stateName={selectedStateData} />
                        <ServicesJerseyCity />
                        <RoomSpaces />
                        <LocationRequestATour />
                        <BottomCards />

                        <div className="city-list">
                            <h2>Cities in {selectedStateData.StateName}</h2>
                            {selectedStateData.cities.data.map((city: any) => (
                                <div key={city.id} className="city-item">
                                    <h3>{city.CityName}</h3>
                                    <div className="office-list">
                                        <h4>Offices in {city.CityName}</h4>
                                        {city.offices.data.map((office: any) => (
                                            <div key={office.id} className="office-item">
                                                <h5>{office.OfficeName}</h5>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )} */}
            </div>
        </>
    );
}

export default States;

export const getServerSideProps = async ({ params }: any) => {
    const { citySlug } = params;
    const locationData = await getLocationData();
    const headerData = await getNavigationData();
    return {
        props: {
            locationData,
            headerData,
            citySlug
        }
    };
};
