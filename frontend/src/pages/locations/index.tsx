import LocationPage from '@/components/Location'
import { LocationContextProvider } from '@/store/locationContext'
import React from 'react'

const Location = () => {
  return (
    <LocationContextProvider>
        <LocationPage />
    </LocationContextProvider>
  )


}

export default Location