import React from 'react'
import Header from '../../Header/Header'

export default function ContactUs() {
  return (
    <div>
        <Header></Header>
        <div className='bg-purple-500'>
     <div className="hero  text-center ">
            
                <div>
                
                <div className="w-8/12 mx-auto py-10">
                  <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white ">Contact Us</h1>
                  <p className="py-6 text-white">
                 Do you need any help please contact us
                  </p>
                 
                </div>
                </div>
            </div>
     </div>
     <div className='my-32 w-10/12 mx-auto'>
     <h1 className='text-center font-bold text-4xl mb-10'>Login Form</h1>
        <form className='text-center bg-gray-400 p-20 rounded-3xl'>
         <div className='mb-5'>
         <span className='text-xl font-bold mr-4 '> Name:</span> <input className="outline-0 border p-3 border-green-400 rounded-2xl" type="text" placeholder='Enter Your Name' />
        </div>
         <div className='mb-5'>
         <span className='text-xl font-bold mr-4 '> Email:</span> <input className="outline-0 border p-3 border-green-400 rounded-2xl" type="text" placeholder=' Your email' />
        </div>
         <div className='mb-3'>
         <span className='text-xl font-bold mr-4 '> Phone:</span> <input className="outline-0 border p-3 border-green-400 rounded-2xl" type="text" placeholder=' Your phone' />
        </div>
        </form>
     </div>
    </div>
  )
}
