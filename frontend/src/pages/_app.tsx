import "@/styles/globals.css";
import "@/styles/header.css";
import "@/styles/slider.css";
import "@/styles/footer.css";
import "@/styles/varietyRooms.css";
import "@/styles/tourRequestCard.css";
import "@/styles/getEveryThing.css";
import "@/styles/companyfacilities.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "@/layout";
import { getNavigationData } from "../../lib/strapiQuery";

export default function App({ Component, pageProps, navbarData } : AppProps & {navbarData:any} ) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap.min.js') : null
}, [])



  return<>
  <Layout navbarData={navbarData}>

  <Component {...pageProps} />;
  </Layout>
  </>
}

App.getInitialProps = async () => {
  const navbarData = await getNavigationData()
  // const footerdata = await getFooter();
  return { navbarData };
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
