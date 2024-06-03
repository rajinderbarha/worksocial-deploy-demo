
import BottomCards from "@/components/Location/BottomCards";
import LocationRequestATour from "@/components/Location/LocationRequestATour";
import LocationSlider from "@/components/Location/LocationSlider";
import RoomSpaces from "@/components/Location/RoomSpaces";
import ServicesJerseyCity from "@/components/Location/ServicesJerseyCity";
import LocationImageBanner from "@/components/Location/LocationImageBanner";
import { getLocationData } from "../../../../../lib/strapiQuery";

function City({ locationData, citySlug, stateSlug }: any) {
    const { data } = locationData;
    const citiesData = data.map((state: any) => state.cities.data).flat();
    const selectedCity = citiesData.find((city: any) => city.citySlug === citySlug);

    const roomSpaces = selectedCity?.space.data;

    return (
        <div className="locations">
            {selectedCity && (
                <>
                    <LocationImageBanner location={selectedCity} />
                    <ServicesJerseyCity />
                    <RoomSpaces roomSpaces={roomSpaces} citySlug={citySlug} stateSlug={stateSlug} />
                    <LocationRequestATour />
                    <BottomCards />
                </>
            )}
        </div>
    );
}

export default City;

export const getServerSideProps = async ({ params }: any) => {
    const { stateSlug, citySlug } = params;
    const locationData = await getLocationData();
    return {
        props: {
            locationData,
            citySlug,
            stateSlug,
        },
    };
};
