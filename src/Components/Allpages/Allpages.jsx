import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'


export default function Allpages() {
  return (
    <div>
           {/* <Header></Header> */}
          <div className='min-h-[calc(100vh - 200px)]'>
          <Outlet></Outlet>
          </div>
           <Footer></Footer>
    </div>
  )
}
