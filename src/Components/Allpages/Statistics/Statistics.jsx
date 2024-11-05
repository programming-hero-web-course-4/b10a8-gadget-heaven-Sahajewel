import React from 'react'
import Header from '../../Header/Header'
import { Helmet } from 'react-helmet'

export default function Statistics() {
  return (
    <div>
       <Helmet>
       <title>Statistics</title>
     </Helmet>
      <Header></Header>
      <div className='bg-purple-500'>
       <div className="hero  text-center ">
            
            <div>
            
            <div className="w-8/12 mx-auto py-10">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white ">Statistics</h1>
              <p className="py-6 text-white">
              A product detail  is a key component of any e-commerce platform, providing potential buyers with comprehensive information about a specific product. 
              </p>
            
            </div>
            </div>
   </div>
    </div>

    <h1 className='text-center text-5xl text-purple-500 my-20 font-bold'>No Data found</h1>
    </div>
  )
}
