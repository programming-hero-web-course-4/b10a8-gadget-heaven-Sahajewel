import React, { useState } from 'react'
import Header from '../../Header/Header'
import { NavLink } from 'react-router-dom'

export default function Dashboard({dash}) {
const [display, setDisplay] = useState("cart")
const showCart= ()=>{
  setDisplay("cart")
}
const showWishlist = ()=>{
  setDisplay("wishlist")
}

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
     <div className='flex justify-between bg-gray-400 w-10/12 mx-auto p-8 items-center overflow-hidden'>
     
    <div className='flex'>
    <div className='mr-5 w-2/12'>
        {
          <img className='w-full h-full bg-black p-2 rounded-2xl' src={dash?.product_image} alt="" />
        }
      </div>
      <div className='w-6/10 text-white'>
          {
            <h1 className='text-2xl mb-2 font-bold'>{dash?.product_title}</h1>
            
          }
          {
            <p className='pb-2 text-lg'>{dash?.description}</p>
          }
          {
            <p className='pb-3'>{dash?.price}</p>
          }
          <button className='bg-purple-500 px-5 py-3 rounded-3xl hover:bg-purple-400 duration-300'>Add</button>
      </div>
    </div>
      <div className='text-white text-xl cursor-pointer bg-purple-500 px-4 py-2 rounded-3xl hover:bg-purple-400 duration-200'>Delete</div>
     </div>
    </div>
  )
}
