import React, {  useContext, useEffect, useState } from 'react'
import Header from '../../Header/Header'
import { Helmet } from 'react-helmet'
import { NavLink, useLoaderData } from 'react-router-dom'
import { getStoredCart } from '../../../untils';
import { Money } from '../../ContextCount/ContextCount';


export default function Dashboard() {
  const [cartShow, setShowCart] = useState([]);
  const [wishlistShow, setWishlist] = useState([])
  
const allCart = useLoaderData();

useEffect(()=>{
  const storedCartToDisplay = getStoredCart();
  const storedCartToDisplayInt = storedCartToDisplay.map(id=>(id))

  const cartList = allCart.filter(cart=>storedCartToDisplayInt.includes( cart.product_id))
  setShowCart(cartList)
  
},[])

useEffect(()=>{
  const storeWishlistToDisplay = getStoredCart();
  const storeedWishlistToDisplayInt = storeWishlistToDisplay.map(id=>id);
  const wishlistList = allCart.filter(wishlist=>storeedWishlistToDisplayInt.includes(wishlist.product_id))
  setWishlist(wishlistList)
},[])


const HandleSort=()=>{
  const sorted = [...cartShow].sort((a,b)=>b.price- a.price)

 setShowCart(sorted)
}

  
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
                <h1 className='text-2xl font-bold mr-10'>Total Cost: 0 </h1>
                <button onClick={()=>HandleSort(cartShow)} className='mr-4 border border-purple-500 py-3 px-5 text-purple-500 text-lg rounded-3xl hover:scale-105 duration-300'>Sort by Price</button>
            
                  <button className="btn btn-primary hover:bg-purple-500 duration-300" onClick={()=>document.getElementById('my_modal_1').showModal()}>Purchase</button>
                  <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-4xl">Congratulations</h3>
                      <p className="py-4 text-green-500 text-xl">You have succssfully purchased</p>
                      <div className="modal-action">
                        <form method="dialog">
                        
                          <NavLink to="/" className="btn">Close</NavLink>
                        </form>
                      </div>
                    </div>
                  </dialog>
                 
                </div>      
     </div>
    
     {
      cartShow.map((cartShowIn,index)=><div key={index} className='flex justify-between items-center w-8/12 mx-auto bg-gray-400 mb-8 mt-16 p-8 rounded-2xl'>
       <div className='flex justify-center'>
       <div className=''>
              <img className='h-[150px] w-full mr-8' src={cartShowIn.product_image} alt={cartShowIn.product_title} />
        </div>
        <div className='ml-5 text-white'>
          <h1 className='mb-3'> {cartShowIn.product_title}</h1>
          <p className='mb-3'>{cartShowIn.description}</p>
          <p>Price: ${cartShowIn.price}</p>
        </div>
       </div>
        <div>
          <button className='bg-white text-green-500 p-2 rounded-2xl hover:bg-gray-300 duration-300 '>Delete</button>
         
        </div>
       
        </div>
        )
     }
  
    </div>
  )
}
