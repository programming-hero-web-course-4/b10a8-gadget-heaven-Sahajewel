import React from 'react'
import {   NavLink } from 'react-router-dom'



export default function AllProductsAndCards({displayCate}) {
    const {category} = displayCate


  return (
   <div>
     <div className='grid grid-cols-4 w-10/12 mx-auto '>
    
      <div className='col-span-1 '>
       <div className=' mb-5 '>
        
       {
           <NavLink className={({isActive})=>isActive?"bg-red-300": ""} to={`/category/${category}`}> <h1 className='bg-gray-500 rounded-2xl px-4 py-3 text-white text-lg font-bold'>{category}</h1></NavLink>
        }
       </div>
      </div>
      <div className='col-span-3 grid grid-cols-3 gap-5'>
          
      </div>
    </div>
   </div>
  )
}
