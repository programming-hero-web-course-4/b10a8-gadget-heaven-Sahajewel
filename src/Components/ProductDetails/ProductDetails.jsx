import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import Productdetail from '../ProductDetail/Productdetail'
import Header from '../Header/Header'
import { addToStoredCart, addToWishlist } from '../../untils'
import { toast } from 'react-toastify'

export default function ProductDetails() {
    const datas = useLoaderData()
    const {id} = useParams()
    const [detail, setDetail] = useState()

    const handleToAddCart = id=>{
      addToStoredCart(id)
      toast("product added")
    }

    const handleToWishlist = id=>{
      addToWishlist(id);
      toast("product added")
    }
    
    useEffect(()=>{
        const findData = datas.find(data=>data.product_id== id)
            setDetail(findData)
    },[datas, id])
   
  return (
   <div>
    <div>
      <Header></Header>
    </div>
    <div className='bg-purple-500 pb-[400px] mb-[200px]'>
       <div className="hero  text-center ">
            
            <div>
            
            <div className="w-8/12 mx-auto py-10">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white ">Product Details</h1>
              <p className="py-6 text-white">
              A product detail  is a key component of any e-commerce platform, providing potential buyers with comprehensive information about a specific product. 
              </p>
            
            </div>
            </div>
   </div>
    </div>
     <div className='absolute top-[300px] mx-auto '>
      {
        <Productdetail handleToAddCart={()=>handleToAddCart(id)} handleToWishlist={()=>handleToWishlist(id)} detail={detail}></Productdetail>
      }
       
    </div>
   </div>
  )
}
