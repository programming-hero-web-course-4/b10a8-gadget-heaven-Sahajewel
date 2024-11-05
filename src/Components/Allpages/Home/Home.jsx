import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import Category from '../../Category/Category'
import Banner from '../../Banner/Banner';
import Header from '../../Header/Header';
import { Helmet  } from 'react-helmet';
export default function Home() {
    const categories = useLoaderData();
   
  return (
   <div>
     <Helmet>
       <title>Home</title>
     </Helmet>
    <div className='bg-purple-500'>
      <Header></Header>
    </div>
   <div className='bg-purple-500'>
      <Banner></Banner>
   </div>
    <h1 className='text-center text-lg md:text-2xl lg:text-4xl font-bold my-5'>Explore Cutting Edge Gadget</h1>
   {
    categories.map(cate=><Category key={cate.id} displayCate={cate}></Category>)
   }
   <Outlet></Outlet>
   </div>
  )
}
