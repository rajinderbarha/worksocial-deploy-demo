// pages/historyExample.tsx
import React from 'react';
import { useRouter } from 'next/router';
import { GoArrowLeft } from 'react-icons/go';
import classes from "./GoBack.module.css"

function GoBack() {
  const router = useRouter();

  const goBack = () => {
    const { stateSlug, citySlug } = router.query;
    
    // Navigate to the dynamic route with the stateSlug
    if (stateSlug) {
      router.replace(`/locations/${stateSlug}/${citySlug}`);
    } else {
      router.replace('..');
    }
  };

  return (

    <div className={`${classes.GoBack} d-flex align-items-center`} onClick={goBack}>
    <GoArrowLeft className='go_back_color' />
    <p className='go_back_color font-normal '>Work Social Jersey City</p>
  </div>
    
  );
}

export default GoBack;
