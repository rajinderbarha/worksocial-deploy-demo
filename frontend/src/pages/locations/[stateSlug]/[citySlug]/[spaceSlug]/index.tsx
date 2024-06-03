// Space.js
import React from 'react';
import GoBack from '@/components/Location/GoBack';
import ImageGallary from '@/components/Location/ImageGallary';
import JerseyLongRoom from '@/components/Location/JerseyLongRoom';
import { getLocationData } from '../../../../../../lib/strapiQuery';
// import { useRouter } from 'next/router'; // Import the useRouter hook

function Space({ locationData, spaceSlug }: any) {
  // const router = useRouter(); // Initialize the useRouter hook
  const spaces = locationData.data.map((state: any) => state.cities.data.map((city: any) => city.space.data)).flat(2);
  const selectedSpace = spaces.find((space: any) => space.slug === spaceSlug);

  // const handleGoBack = () => {
  //   router.back(); // Use router.back() to navigate back one step
  // };

  return (
    <>
      <div className="homemmain_padding">
        <div className="jersey_city_container">
          {/* {spaceSlug} */}
          <GoBack />
          <ImageGallary space={selectedSpace} /> 
          <JerseyLongRoom space={selectedSpace} /> 
        </div>
      </div>
    </>
  );
}

export default Space;

export const getServerSideProps = async ({ params }: any) => {
  const { spaceSlug } = params;
  const locationData = await getLocationData();
  return {
    props: {
      locationData,
      spaceSlug
    }
  };
};
