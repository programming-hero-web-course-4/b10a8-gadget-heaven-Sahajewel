import React, {  useState } from 'react'
import Header from '../../Header/Header'
import { Helmet } from 'react-helmet'

export default function Dashboard() {

  
const [display, setDisplay] = useState("cart")
const showCart= ()=>{
  setDisplay("cart")
}
const showWishlist = ()=>{
  setDisplay("wishlist")
}

  return (
    <div>
     <Helmet>
       <title>Dashboard</title>
     </Helmet>
     <Header></Header>
     <div className='bg-purple-500'>
     <div className="hero  text-center ">
            
                <div>
                
                <div className="w-8/12 mx-auto py-10">
                  <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white ">DashBoard</h1>
                  <p className="py-6 text-white">
                  A dashboard is a user interface that visually displays key information, metrics, and data insights in a single, easy-to-read format.
                  </p>
                  <button onClick={showCart} className={`px-4 py-2 rounded ${display === "cart"?  "bg-green-500 mr-4": "bg-green-700"}`}>Cart</button>
                  <button onClick={showWishlist} className={`px-4 py-2 rounded ${display==="wishlist"? "bg-green-500 ml-4": "bg-green-700"}`}>Wishlist</button>
                </div>
                </div>
            </div>
     </div>

     <div className='w-10/12 mx-auto mb-5'>
      {
        display === "cart" ?(
          <h2 className='text-3xl font-bold mt-5'>Cart</h2>

        ): <h2 className='text-3xl font-bold mt-5'>Wishlist</h2>
      }
     </div>
     <div className='flex justify-between items-center'>
             <div>
              </div>    
              <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold mr-4'>Total Cost:</h1>
                <button className='mr-4 border border-purple-500 py-3 px-5 text-purple-500 text-lg rounded-3xl'>Sort by Price</button>
                <button className='text-white rounded-3xl bg-purple-500 py-3 px-4 text-lg'>Purchase</button>
                </div>      
     </div>
  
    </div>
  )
}
