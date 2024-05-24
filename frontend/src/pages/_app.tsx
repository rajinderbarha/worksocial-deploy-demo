import "@/styles/globals.css";
import "@/styles/header.css";
import "@/styles/slider.css";
import "@/styles/footer.css";
import "@/styles/varietyRooms.css";
import "@/styles/tourRequestCard.css";
import "@/styles/getEveryThing.css";
import "@/styles/companyfacilities.css";
import "@/styles/popularLocations.css";
import "@/styles/workTogether.css";
import "@/styles/roomcard.css";
import "@/styles/trustedByEnterprices.css";
import "@/styles/marqueeComponent.css";
import "@/styles/workWithPeople.css";
import "@/styles/reviewComponent.css";
import "@/styles/reviewCard.css";
import "@/styles/expandYourBussiness.css";
import "@/styles/workSocialBenifits.css";
import "@/styles/benifitsCards.css";
import "@/styles/liveSocial.css";
import "@/styles/liveSocial_image_text.css";
import "@/styles/liveSocialCard.css";
import "@/styles/scaleYourBusiness.css";
import "@/styles/faqComponent.css";
import "@/styles/accordionComponent.css";
import "@/styles/requestATour.css";
import "@/styles/requestATourCard.css";
import "@/styles/footer.css";
import "@/styles/servicesJerseyCity.css";

import type { AppProps } from "next/app";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "@/layout";
import { getFooterData, getNavigationData } from "../../lib/strapiQuery";

export default function App({ Component, pageProps, headerData, footerData } : AppProps & {headerData:any,footerData:any} ) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap.min.js') : null
}, [])


// console.log("++++++++++++++++++++++++++++++++++++++++++++",headerData)


  return<>
 <Layout headerData={headerData}  footerData={footerData} >   

  <Component {...pageProps} />;
  </Layout>
  </>
}

App.getInitialProps = async () => {
  const headerData = await getNavigationData()
  const footerData = await getFooterData()
  return { headerData,footerData };
};






// // _app.tsx
// import "@/styles/globals.css";
// // import type { AppProps } from "next/app";
// // import Layout from "../layout/index";
// // import { getFooter, getHeader } from "../../lib/sanity.query";
// // import { PopupProvider } from "@/context";
// // import { FooterType, HeaderType } from "../../lib/interface";

// function MyApp({
//   Component,
//   pageProps,
//   headerdata,
//   footerdata,
// }: AppProps & { headerdata: HeaderType[]; footerdata: FooterType[] }) {
//   return (
//     <PopupProvider>
//       <Layout headerdata={headerdata} footerdata={footerdata}>
//         <Component {...pageProps} />
//       </Layout>
//     </PopupProvider>
//   );
// }

// MyApp.getInitialProps = async () => {
//   const headerdata = await getHeader();
//   const footerdata = await getFooter();
//   return { headerdata, footerdata };
// };

// export default MyApp;
