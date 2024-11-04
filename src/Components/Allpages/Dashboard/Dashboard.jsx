import React from 'react'
import Header from '../../Header/Header'
// import Banner from '../../Banner/Banner'
// import { useLoaderData, useParams } from 'react-router-dom'

export default function Dashboard({dash}) {
  // const {product_image} = dash;
//   const {product_title} = dash
//  console.log(product_title)
console.log(dash)
  return (
    <div>
     <Header></Header>
     <div className='bg-purple-500'>
     <div className="hero  text-center ">
            
                <div>
                
                <div className="w-8/12 mx-auto py-10">
                  <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white ">DashBoard</h1>
                  <p className="py-6 text-white">
                  A dashboard is a user interface that visually displays key information, metrics, and data insights in a single, easy-to-read format.
                  </p>
                  <button className="btn btn-success text-white text-lg mr-5">Cart</button>
                  <button className="btn btn-success text-white text-lg">Wishlist</button>
                </div>
                </div>
            </div>
     </div>
     <div>
      {/* <img src={product_image} alt="" /> */}
     </div>
    </div>
  )
}
