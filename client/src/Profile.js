import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from "react";
import { update } from './reduxComponents/me/meSlice'
import CartCard from './CartCard';

function Profile() {
    const me = useSelector((state) => state.me.value)
    const bikes = useSelector((state) => state.bikes.value)
    const [display,setDisplay] = useState([])
    const [total,setTotal] = useState(0)
    const dispatch = useDispatch()
    // console.log(bikes)
    useEffect(()=>{
      if(me.orders){
        console.log("me.orders.cart")
        console.log(me.orders[0].cart)
        let array = []
        let sum = 0
    
        for(const key in me.orders[0].cart){
          // array.push(<p>Bike id:{key}, quantity:{cart[key]} Bike:{bikes[key].model}</p>)
          array.push(key)
          sum = sum + (bikes[key].price*me.orders[0].cart[key])
        }
        console.log("array")
        console.log(array)
        console.log(sum)
        setTotal(sum)
        setDisplay(array)
    }

    },[])


  return (
  <div>
    <p>Profile id: {me.id?me.id:"logged out"}</p>
    <p>Username: {me.username?me.username:"logged out"}</p>
    <p>My Orders:{me.id?me.orders[0].address:"Log in to track orders"}</p>
  </div>
  )
}

export default Profile;