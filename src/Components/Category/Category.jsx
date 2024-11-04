import React from 'react'
import AllProductsAndCards from '../AllProductsAndCards/AllProductsAndCards'
import {  NavLink } from 'react-router-dom'
// import GadgetCard from '../GadgetCard/GadgetCard'

export default function Category({displayCate}) {
  
  return (
    <div>
    
    <div>
     
    {
       <AllProductsAndCards displayCate={displayCate}></AllProductsAndCards>
    }
    </div>
      {/* {
        <NavLink to={`/category/${category}`}> <h1 className='bg-gray-500 rounded-2xl px-4 py-3 text-white text-lg font-bold'>{category}</h1></NavLink>
      } */}
      {/* <GadgetCard></GadgetCard> */}
    </div>
  )
}
