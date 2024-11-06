import React, { useState } from 'react';
import { CiStar } from "react-icons/ci";
import { GiEternalLove } from "react-icons/gi";
// import { NavLink } from 'react-router-dom';
// import { addToCart, addToStoredCart, getAllAddToCart } from '../../untils';
// import { toast } from 'react-toastify';

// import Dash from '../Dash/Dash';
// import { toast } from 'react-toastify';

export default function Productdetail({detail,handleToAddCart,handleToWishlist}) {

  
    const {product_image,product_title,price,specification,rating,description,product_id} = detail || {}
  

  return (
    <div className='flex flex-col md:flex-row mb-20 w-8/12 mx-auto bg-gray-400 p-10'>
      <div className='w-full md:w-6/12 mr-10'>
        <img className='w-full h-full object-cover' src={product_image} alt={product_title} />
      </div>
      <div className='w-full md:w-6/12'>
        <h1 className='text-white font-bold text-lg md:text-2xl lg:text-3xl'>{product_title}</h1>
        <p className='my-3 text-white text-xl'>{price}</p>
        <button className='bg-green-300 border-2 border-green-700 px-3 py-2 rounded-2xl mb-3 text-red-400 hover:scale-110 duration-300'>In Stock</button>
        <p className='text-white'>{description}</p>
        <h1 className='text-white mt-5 text-2xl font-bold'>Specification</h1>
       <div className='my-5'>
       <ul>
        {
       specification && specification.map((spec, index) => (
          <li className="text-white list-disc" key={index}>{spec}</li>
        ))
        }
      </ul>
       </div>
       <h1 className='text-white font-bold text-2xl'>Rating</h1>
       <div className='flex  my-3 items-center'>
          <div className='flex flex-col md:flex-row gap-2 mr-3 items-center text-yellow-300 text-2xl '>
                 <CiStar />
                 <CiStar />
                 <CiStar />
                 <CiStar />
                 <CiStar />
            </div>
            <div>
                <p className='text-white font-bold text-lg'>{rating}</p>
            </div>
       </div>
       <div className='flex items-center'>
      <button onClick={handleToAddCart}     className='bg-purple-500 rounded-3xl px-5 py-2 text-white mr-3 text-xl hover:scale-110 duration-200'>Add To Card</button>
       
        <div onClick={handleToWishlist} className='text-3xl border p-3 rounded-full text-white'>
        <GiEternalLove />
        </div>
        {
         
        }
       </div>
       
      </div>
      
     
    </div>
  )
}
// to={`/dash/${product_id}`}