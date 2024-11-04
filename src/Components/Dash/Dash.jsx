import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import Dashboard from '../Allpages/Dashboard/Dashboard'

export default function Dash() {
    const datas = useLoaderData([])
    const {id} = useParams()
    const [dash , setDesh] = useState()
    useEffect(()=>{
        const findCart = datas.find((data)=>
            data.product_id == id
        )
        setDesh(findCart)
    },[datas,id])
    console.log(dash)
  return (
    <div>
      <Dashboard dash={dash}></Dashboard>
    </div>
  )
}
