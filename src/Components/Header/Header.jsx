import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartArrowDown } from "react-icons/fa";
import { RiDislikeFill } from "react-icons/ri";
// import image from "./banner.jpg"
export default function Header() {
  return (

    
  <div>
     <div className='bg-[#9538E2] min-h-[580px] mb-20 rounded-2xl mx-10 relative' >
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
                <a className="text-md md:text-lg lg:text-2xl font-bold  text-white pl-4">Gadget Heaven</a>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                
                <NavLink className={({isActive})=>isActive?"bg-green-400 px-3 py-2 rounded-2xl text-xl mr-4": "bg-green-700 px-3 py-2 rounded-2xl text-xl mr-4"} to="/">Home</NavLink>
                  <NavLink className={({isActive})=>isActive?"bg-green-400 px-3 py-2 rounded-2xl text-xl mr-4": "bg-green-700 px-3 py-2 rounded-2xl text-xl mr-4"} to="/statistics">Statistics</NavLink>
                  <NavLink className={({isActive})=>isActive?"bg-green-400 px-3 py-2 rounded-2xl text-xl mr-4": "bg-green-700 px-3 py-2 rounded-2xl text-xl mr-4"} to="/dashboard">Dashboard</NavLink>
                
                </ul>
              </div>
              <div className="navbar-end">
                <a className="btn mr-4"><FaCartArrowDown /></a>
                <a className="btn mr-7"><RiDislikeFill /></a>
              </div>
            </div>
            <div className="hero  text-center ">
            
                <div>
                
                <div className="w-8/12 mx-auto py-10">
                  <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white ">Hello thereUpgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                  <p className="py-6 text-white">
                    Explore the latest gadget that will take your experience to the next level. From smart dvices to the coolest accessories, we have it all!
                  </p>
                  <button className="btn btn-success text-white text-lg">Shop Now</button>
                </div>
                </div>
            </div>
           
        </div>
        {/* <div className='w-7/12 mx-auto absolute  left-0 right-0 border p-10 rounded-xl '>
              <img className='w-full rounded-2xl ' src={image} alt="" />
           </div> */}
     </div>
    
  </div>
  )
}
