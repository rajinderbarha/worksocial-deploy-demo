

import BottomCards from "@/components/Location/BottomCards";
import LocationRequestATour from "@/components/Location/LocationRequestATour";
import LocationSlider from "@/components/Location/LocationSlider";
import RoomSpaces from "@/components/Location/RoomSpaces";
import ServicesJerseyCity from "@/components/Location/ServicesJerseyCity";
import LocationImageBanner from "@/components/Location/LocationImageBanner";
import { getLocationData, getNavigationData } from "../../../../../lib/strapiQuery";

function States({ locationData, citySlug }: any) {
    console.log(citySlug);

    // console.log(headerData);
    console.log(locationData);
    const { data } = locationData

    // const citiesData = data.map((state: any, index: number) => {
    //     const city = state.cities.data.map((city: any, index: number) => (
    //         city
    //     ))
    //     return city
    // }

    // )

    const citiesData = data.map((state: any) => state.cities.data).flat();
console.log(citiesData);




    // // const  nestedCityData = citiesData.map((item:any,index:number)=>(
   // //     item
    // // ));
    // // console.log(nestedCityData)


    // const { Locations: { states: { data } } } = headerData.block[0];
    // console.log(data);

    // Find the selected state using the stateSlug from the URL params
    const selectedCity = citiesData.find((city: any) => city.citySlug === citySlug);
    console.log(selectedCity);

    // Find the selected state's data
    // const selectedStateData = locationData.data.find((state: any) => selectedState.stateSlug === state.stateSlug);
    // console.log(selectedStateData);

    // Render the city and office data
    return (
        <>
            <div className="locations">
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
    // const headerData = await getNavigationData();
    return {
        props: {
            locationData,
            // headerData,
            citySlug
        }
    };
};
