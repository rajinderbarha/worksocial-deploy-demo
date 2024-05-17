import Image from "next/image";
import styles from "./page.module.module.css";
// import Header from "@/common/Header";
import GetEveryThing from "@/components/homepage/GetEveryThing";
import Slider from "@/components/homepage/Slider"
// import Slider from "@/components/homepage/Slider";
import VarietyRooms from "@/components/homepage/VarietyRooms";
import Companyfacilities from "@/components/homepage/Companyfacilities";
import PopularLocations from "@/components/homepage/PopularLocations";
import WorkTogether from "@/components/homepage/WorkTogether";
import TrustedByEnterprices from "@/components/homepage/TrustedByEnterprices";
import WorkWithPeople from "@/components/homepage/WorkWithPeople";
import ReviewComponent from "@/components/homepage/ReviewComponent";
import ExpandYourBussiness from "@/components/homepage/ExpandYourBussiness";
import WorkSocialBenifits from "@/components/homepage/WorkSocialBenifits";
import LiveSocial from "@/components/homepage/LiveSocial";
import ScaleYourBusiness from "@/components/homepage/ScaleYourBusiness";
import FAQComponent from "@/components/homepage/FAQComponent";
import RequestATour from "@/components/homepage/RequestATour";
import Header from "@/common/Header";
import { getHomePageData } from "../../lib/strapiQuery";
import { HomepageGetEveryThing } from '../../../backend/types/generated/components';







  function blockRenderer(block: any) {        // to define blocks according to  __component:   property
    switch (block.__component) {
      case "homepage.slider":
        // console.log(block)
        return <Slider key={block.id} data={block} />;
      case "homepage.variet-rooms":
        return <VarietyRooms key={block.id} data={block} />;
      case "homepage.get-every-thing":
        return <GetEveryThing key={block.id} data={block} />;
      // case "Companyfacilities":
      //   return <Companyfacilities key={block.id} data={block} />;
      default:
        return null;
    }
  }




export default  function Home({homapageData}:any) {
    console.log("home",homapageData)
  // const homapageData  =  await getHomePageData()
  // console.log("homapageData-----++++++++++---",homapageData.blocks);
    const {blocks} = homapageData;
  //   // console.log("---------------00000---------",blocks[1])
  
  if(!blocks) return <div>No blocks found </div>
  
  const CompanyfacilitiesData  =  homapageData.Companyfacilities
        console.log(CompanyfacilitiesData)
  return (
    <>

   

      {blocks.map((block:any)=>   blockRenderer(block))};
     
       <Companyfacilities data={CompanyfacilitiesData}/>
        {/*<PopularLocations />
      <WorkTogether />
     <TrustedByEnterprices />
       <WorkWithPeople />
     <ReviewComponent />
      <ExpandYourBussiness />
        <WorkSocialBenifits />
      <LiveSocial />
       <ScaleYourBusiness />
      <FAQComponent />
      <RequestATour /> */}
    </>
  );
};



 export const getStaticProps = async () => {
  const homapageData  =  await getHomePageData()

  return{
    props:{
      homapageData
    }
  }
}

