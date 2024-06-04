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
// import Header from "@/common/Header";
import { getHomePageData } from "../../lib/strapiQuery";
import { HomepageGetEveryThing } from '../../../backend/types/generated/components';


function blockRender(block: any) {        // to define blocks according to  __component:   property
  switch (block.__component) {
    case "homepage.slider":
      // console.log(block)
      return <Slider key={block.id} data={block} />;
    case "homepage.variet-rooms":
      return <VarietyRooms key={block.id} data={block} />;
    case "homepage.get-every-thing":
      return <GetEveryThing key={block.id} data={block} />;
    case "homepage.companyfacilities":
      return <Companyfacilities key={block.id} data={block} />;
    case "homepage.popular-locations":
      return <PopularLocations key={block.id} data={block} />;
    case "homepage.work-together":
      return <WorkTogether key={block.id} data={block} />;
    case "homepage.trusted-by-enterprices":
      return <TrustedByEnterprices key={block.id} data={block} />;
    case "homepage.work-with-people":
      return <WorkWithPeople key={block.id} data={block} />;
    case "homepage.review-component":
      return <ReviewComponent key={block.id} data={block} />;
    case "homepage.expand-your-bussiness":
      return <ExpandYourBussiness key={block.id} data={block} />;
    case "homepage.work-social-benifits":
      return <WorkSocialBenifits key={block.id} data={block} />;
    case "homepage.live-social":
      return <LiveSocial key={block.id} data={block} />;
    case "homepage.scale-your-business":
      return <ScaleYourBusiness key={block.id} Data={block} />;
    case "homepage.faq-component":
      return <FAQComponent key={block.id} data={block} />;
    case "global.request-a-tour":
      return <RequestATour key={block.id} data={block} />;
    default:
      return null;
  }
}




export default function Home({ homapageData }: any) {
  const { blocks } = homapageData;
  if (!blocks) return <div>No blocks found </div>
  return<></>
  //  blocks.map((block: any) => blockRender(block));
};


// export const getStaticProps = async () => {
//   const homapageData = await getHomePageData()
//   return {
//     props: {
//       homapageData
//     }
//   }
// }

