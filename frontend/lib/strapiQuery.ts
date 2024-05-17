import qs from "qs";
// import { getAuthToken } from "@/data/services/get-token";
import { unstable_noStore as noStore } from 'next/cache';
import { flattenAttributes, getStrapiURL } from "@/data/utils";

const baseUrl = getStrapiURL();

async function fetchData(url: string) {
  // const authToken = await getAuthToken();

  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, headers || {});
    const data = await response.json();
    return flattenAttributes(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }
}


export async function getHomePageData() {
  
    const url =  new URL("/api/homepage",baseUrl)

    url.search =  qs.stringify({
      populate: {
       Companyfacilities:{
         populate:{
            image: {
              fields: ["url"]
            },
            }
            },
        blocks: {
        populate: {
                Slidersec: {
                  populate: {
                    sliderimg: {
                      fields: ["url"]
                    }
                  }
                },
                button:{
                populate:{
                icon:{
                fields:["url"]
                }
                }
                },
                Varietyroomcard :{
                  populate: {
                  image: {
                    fields:["url"]
                  }
                  }
                },
                image:{
                 fields:["url"]
                }
              },
        
        
            Links: {
              populate: true
            },
    
            logo: {
              fields: ["url", "alternativeText"]
            },
            searchIcon: {
              fields: ["url", "alternativeText"]
            },
      
           
        }
      }
    })

    return await fetchData(url.href)
}

export async function getNavigationData() {
  
    const url =  new URL("/api/navigation",baseUrl)

    url.search =  qs.stringify({
      populate:{
      block:{
      populate:{
      Links:{
      populate:true
      },
      
      logo:{
      fields:["url","alternativeText"]
      },
      searchIcon:{
       fields:["url","alternativeText"]
      }
      }
      }
      }
    })

    return await fetchData(url.href)
}








// export async function getGlobalPageData(){      // header  and footer

//   noStore()       //This function can be used to indicate a particular component should not be cached and should render dynamically.
//     const url =  new URL(`/api/global`, baseUrl);

//     url.search =  qs.stringify({                // another way to get the data
//         populate:[
//         "header.logoText",
//         "header.ctaButton",
//         "footer.logoText",
//         "footer.socialLink",
//         ]
//       })
//       return await fetchData(url.href)
// }


// export async function getGlobalPageMetaData(){      // header  and footer    // setting metaData dynamically 

//     const url =  new URL(`/api/global`, baseUrl);

//     url.search =  qs.stringify({                // another way to get the data
//        fields: ["title","description"]
//       })
//       // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!",url.href)
//       return await fetchData(url.href)
// }

