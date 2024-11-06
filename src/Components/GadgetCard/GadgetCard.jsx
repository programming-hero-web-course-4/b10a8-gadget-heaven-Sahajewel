import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
// import AllProductsAndCards from '../AllProductsAndCards/AllProductsAndCards'

export default function GadgetCard({data}) {

    const {product_title,product_image,price,product_id} = data || {}
  return (
  
     <div className='bg-gray-500 p-10 rounded-2xl'>
      <img className='w-full h-96 object-cover' src={product_image} alt={product_title} />
      <h1 className='font-bold text-xl pt-4 pb-2 text-white '>{product_title}</h1>
      <p className='text-white text-lg mb-5'>Price: ${price}</p>
      <NavLink to={`/productdetails/${product_id}`} className="bg-green-400 px-4 py-2 rounded-2xl text-white hover:bg-green-200 duration-300">Details</NavLink>
    </div>
  
  )
}
