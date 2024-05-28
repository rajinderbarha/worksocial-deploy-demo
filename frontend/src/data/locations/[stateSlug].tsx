import BottomCards from "@/components/Location/BottomCards";
import LocationRequestATour from "@/components/Location/LocationRequestATour";
import LocationSlider from "@/components/Location/LocationSlider";
import RoomSpaces from "@/components/Location/RoomSpaces";
import ServicesJerseyCity from "@/components/Location/ServicesJerseyCity";
import LocationImageBanner from "@/components/Location/LocationImageBanner";
import { getLocationData, getNavigationData } from "../../../lib/strapiQuery";

function States({ locationData, headerData, stateSlug }: any) {
    console.log(stateSlug);
    
    console.log("Header Data:", headerData);
    console.log("Location Data:", locationData);

    if (!headerData.block || !headerData.block[0] || !headerData.block[0].Locations || !headerData.block[0].Locations.states) {
        console.error("Invalid headerData structure", headerData);
        return <div>Error: Invalid header data structure</div>;
    }

    const { Locations: { states: { data } } } = headerData.block[0];
    console.log("States Data:", data);

    // Find the selected state using the stateSlug from the URL params
    const selectedState = data.find((state: any) => state.stateSlug === stateSlug);
    if (!selectedState) {
        console.error("Selected state not found", stateSlug);
        return <div>Error: Selected state not found</div>;
    }
    console.log("Selected State:", selectedState);

    // Find the selected state's data
    const selectedStateData = locationData.data.find((state: any) => selectedState.stateSlug === state.stateSlug);
    if (!selectedStateData) {
        console.error("Selected state data not found", selectedState.stateSlug);
        return <div>Error: Selected state data not found</div>;
    }
    console.log("Selected State Data:", selectedStateData);
    
    // Render the city and office data
    return (
        <>
            <div className="locations">
                {/* Conditionally render components based on the selected state */}
                {selectedStateData && (
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
                                        {city.space && city.space.data ? (
                                            city.space.data.map((office: any) => (
                                                <div key={office.id} className="office-item">
                                                    <h5>{office.OfficeName}</h5>
                                                </div>
                                            ))
                                        ) : (
                                            <p>No offices available.</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default States;

export const getServerSideProps = async ({ params }: any) => {
    const { stateSlug } = params;
    const locationData = await getLocationData();
    const headerData = await getNavigationData();
    return {
        props: {
            locationData,
            headerData,
            stateSlug
   
        }}}