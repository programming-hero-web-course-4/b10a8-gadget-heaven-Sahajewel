import React from 'react'
import banner from "./banner.jpg"
export default function Banner() {
  return (
    <div className="hero  text-center pb-[200px] mb-[200px] md:pb-[300px] md:mb-[300px] lg:pb-[400px] lg:mb-[700px] ">
            
                <div className=''>
                
                <div className="w-8/12 mx-auto py-10 ">
                  <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white ">Hello thereUpgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                  <p className="py-6 text-white">
                    Explore the latest gadget that will take your experience to the next level. From smart dvices to the coolest accessories, we have it all!
                  </p>
                  <button onClick={()=>navigate("/dashboard")} className="btn btn-success text-white text-lg">Shop Now</button>
                </div>
               
                </div>
                <div  className='absolute  w-8/12 flex mx-auto top-[500px]'>
                    <img className=' ' src={banner} alt="" />
                </div>

            </div>
  )
}
