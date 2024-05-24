// import BottomCards from "@/components/Location/BottomCards"
// import LocationRequestATour from "@/components/Location/LocationRequestATour"
// import LocationSlider from "@/components/Location/LocationSlider"
// import RoomSpaces from "@/components/Location/RoomSpaces"
// import ServicesJerseyCity from "@/components/Location/ServicesJerseyCity"
// import LocationImageBanner from "@/components/Location/LocationImageBanner"
// import { getLocationData, getNavigationData } from "../../../lib/strapiQuery"

// function States({ locationData ,headerData}: any) {
//     console.log(headerData)
//     // Assuming you have a state to track the selected state, let's call it selectedState
//     // const selectedState = "New-Jersey"; // Assuming New Jersey is selected initially
// console.log(locationData);

// const{Locations:{states:data}} = headerData.block[0]
// console.log(data);


// const selectedState  =  data.data.find((state:any)=> state.slug)
// console.log(selectedState);


//     // Find the selected state's data
//     const selectedStateData = locationData.data.find((state: any) => selectedState.slug ===state.slug  );

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
//     )
// }

// export default States


// export const getServerSideProps = async ({
//     params,
//   }: {
//     params: { slug: string };
//   }) => {

//     const { slug } = params;
//     const locationData = await getLocationData()
//     const headerData  =  await getNavigationData()
//     return {
//         props: {
//             locationData,headerData
//         }
//     }
// }




import BottomCards from "@/components/Location/BottomCards";
import LocationRequestATour from "@/components/Location/LocationRequestATour";
import LocationSlider from "@/components/Location/LocationSlider";
import RoomSpaces from "@/components/Location/RoomSpaces";
import ServicesJerseyCity from "@/components/Location/ServicesJerseyCity";
import LocationImageBanner from "@/components/Location/LocationImageBanner";
import { getLocationData, getNavigationData } from "../../../lib/strapiQuery";

function States({ locationData, headerData, slug }:any) {
    console.log(headerData);
    console.log(locationData);

    const { Locations: { states: { data } } } = headerData.block[0];
    console.log(data);

    // Find the selected state using the slug from the URL params
    const selectedState = data.find((state:any) => state.slug === slug);
    console.log(selectedState);

    // Find the selected state's data
    const selectedStateData = locationData.data.find((state:any) => selectedState.slug === state.slug);
    console.log(selectedStateData);

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
                    </>
                )}
            </div>
        </>
    );
}

export default States;

export const getServerSideProps = async ({ params }:any) => {
    const { slug } = params;
    const locationData = await getLocationData();
    const headerData = await getNavigationData();
    return {
        props: {
            locationData,
            headerData,
            slug
        }
    };
};
