import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from "react";
import { update } from './reduxComponents/me/meSlice'
import OrderCard from './OrderCard'

function Profile() {
    const me = useSelector((state) => state.me.value)
    const bikes = useSelector((state) => state.bikes.value)
    const dispatch = useDispatch()
    const [display,setDisplay] = useState([])
    const [total,setTotal] = useState(0)

 
  return (
  <div>
    <h1>Username: {me.username?me.username:"logged out"}</h1>
    <div>My Orders:{me.orders?me.orders.map((order)=>{return(<OrderCard key={order.id} order={order} />)}):null}</div>
  </div>
  )
}

export default Profile;