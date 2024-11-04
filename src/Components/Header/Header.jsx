import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaCartArrowDown } from "react-icons/fa";
import { RiDislikeFill } from "react-icons/ri";
// import image from "./banner.jpg"
export default function Header() {
  // const handleCart = ()=>{
  //   const [countCart, setCountCart] = useState(0)
  //   setCountCart(countCart= countCart+1)
  // }
  const navigate = useNavigate()
  return (

    
  <div>
    
      
            <div className="navbar py-5 ">
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  
                  <NavLink className={({isActive})=>isActive?"bg-green-400 px-3 py-2 rounded-2xl text-xl mb-4": "bg-green-700 px-3 py-2 rounded-2xl text-xl mb-4"} to="/">Home</NavLink>
                  <NavLink className={({isActive})=>isActive?"bg-green-400 px-3 py-2 rounded-2xl text-xl mr-4": "bg-green-700 px-3 py-2 rounded-2xl text-xl mb-4"} to="/statistics">Statistics</NavLink>
                  <NavLink className={({isActive})=>isActive?"bg-green-400 px-3 py-2 rounded-2xl text-xl mr-4": "bg-green-700 px-3 py-2 rounded-2xl text-xl mb-4"} to="/dashboard">Dashboard</NavLink>
                  
                  </ul>
                </div>
                <a className="text-md md:text-lg lg:text-2xl font-bold  text-green-500 pl-4">Gadget Heaven</a>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                
                <NavLink className={({isActive})=>isActive?"bg-green-400 px-3 py-2 rounded-2xl text-xl mr-4": "bg-green-700 px-3 py-2 rounded-2xl text-xl mr-4"} to="/">Home</NavLink>
                  <NavLink className={({isActive})=>isActive?"bg-green-400 px-3 py-2 rounded-2xl text-xl mr-4": "bg-green-700 px-3 py-2 rounded-2xl text-xl mr-4"} to="/statistics">Statistics</NavLink>
                  <NavLink className={({isActive})=>isActive?"bg-green-400 px-3 py-2 rounded-2xl text-xl mr-4": "bg-green-700 px-3 py-2 rounded-2xl text-xl mr-4"} to="/dashboard">Dashboard</NavLink>
                
                </ul>
              </div>
              <div className="navbar-end">
                <a className="btn mr-4 relative">
                  <FaCartArrowDown />
                  <span className='absolute top-0 right-0 text-red-400'>0</span></a>
                <a className="btn mr-7 flex relative">
                  <RiDislikeFill />
                  <span className='absolute top-0 right-0 text-red-400'>0</span>
                  </a>
              </div>
            </div>

            
           
  
        {/* <div className='w-7/12 mx-auto absolute  left-0 right-0 border p-10 rounded-xl '>
              <img className='w-full rounded-2xl ' src={image} alt="" />
           </div> */}
  
    
  </div>
  )
}
