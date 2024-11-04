import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
// import GadgetCard from '../GadgetCard/GadgetCard'
import AllProductsAndCards from '../AllProductsAndCards/AllProductsAndCards';
import GadgetCard from '../GadgetCard/GadgetCard';

export default function GadgetCards() {
    const datas = useLoaderData();
    const {category} = useParams()
   const [gadget, setGadget] = useState([])
   useEffect(()=>{
  if(category){
    const filtered = [...datas].filter(data=>data.category === category)
    setGadget(filtered)
  }
  else{
    setGadget(datas)
  }
   },[datas, category]

)
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 mx-auto my-20'>

      {
        gadget.map(data=><GadgetCard key={data.product_id} data={data}></GadgetCard>)
      }
    </div>
  )
}
