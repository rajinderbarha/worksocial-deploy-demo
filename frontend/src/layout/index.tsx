// import Footer from '@/components/Footer'
// import Header from '@/components/Header'
import React from 'react'
// import { FooterType, HeaderType } from '../../lib/interface'
import Header from '@/common/Header'
import Footer from '@/common/Footer'

const Layout = ({children, navbarData}:{children:React.ReactNode,navbarData:any} ) => {
  
  return (
    <div>
        <Header navbarData={navbarData}/>
        {children}
        <Footer  />
    </div>
  )
}

export default Layout