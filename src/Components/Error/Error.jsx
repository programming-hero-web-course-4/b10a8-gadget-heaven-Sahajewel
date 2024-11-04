import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

export default function Error() {
    const error = useRouteError()
  return (
    <div className='flex w-6/12 justify-center flex-col  mx-auto mt-60'>
    
    {
        error.status === 404 && <div>
                 <h1 className='text-5xl font-bold text-center '>Opps! <br /> 404 page not found</h1>
                 <div>
            <NavLink className="bg-gray-400 "  to="/"><p className="text-center py-5 ">Back to Home</p></NavLink>
       </div>
        </div>
    }
     
    </div>
  )
}
