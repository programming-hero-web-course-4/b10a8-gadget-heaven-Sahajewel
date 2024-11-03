import React from 'react'

export default function Footer() {
  return (
    <div className='w-10/12 mx-auto'>
      <div className='text-center '>
        <h1 className='text-lg md:text-2xl lg:text-3xl font-bold pb-3'>Gadget Heaven</h1>
        <p className='border-b pb-5 text-gray-400 text-lg'>Leading the way in Cutting-edge technology and innovation.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 text-center'>
        <div>
            <h1 className='text-2xl font-bold pb-3'>Services</h1>
            <li className='text-xl text-gray-400 pb-2 list-none'>Product Support</li>
            <li className='text-xl text-gray-400 pb-2 list-none'>Order Tracking</li>
            <li className='text-xl text-gray-400 pb-2 list-none'>Shipping & Delivery</li>
            <li className='text-xl text-gray-400 pb-2 list-none'>Returns</li>
        </div>
        <div>
            <h1 className='text-2xl font-bold pb-3'>Company</h1>
            <li className='text-xl text-gray-400 pb-2 list-none'>About Us</li>
            <li className='text-xl text-gray-400 pb-2 list-none'>Careers</li>
            <li className='text-xl text-gray-400 pb-2 list-none'>Contact</li>
        </div>
      <div>
      <h1 className='text-2xl font-bold pb-3'>Legal</h1>
        <li className='text-xl text-gray-400 pb-2 list-none'>Terms of Service</li>
        <li className='text-xl text-gray-400 pb-2 list-none'>Privacy Policy</li>
        <li className='text-xl text-gray-400 pb-2 list-none'>Cookie Policy</li>
      </div>
      </div>
    </div>
  )
}
