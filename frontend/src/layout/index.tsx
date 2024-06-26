// import Footer from '@/components/Footer'
// import Header from '@/components/Header'
import React from 'react'
// import { FooterType, HeaderType } from '../../lib/interface'
import Header from '@/common/Header'
import Footer from '@/common/Footer'

const Layout = ({children, headerData,footerData}:{children:React.ReactNode,headerData:any,footerData:any} ) => {
  
  return (
    <div>
        <Header headerData={headerData}/>
        {children}
        <Footer footerData={footerData} />
    </div>
  )
}

export default Layout