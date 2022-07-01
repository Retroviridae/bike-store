import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from "react";
import bikesSlice, { createBike,deleteBike,updateBike } from './reduxComponents/bikes/bikesSlice'

function Cart(){
    const cart = useSelector((state) => state.cart.value)
    const bikes = useSelector(state => state.bikes.value)
    const dispatch = useDispatch()
    console.log(bikes)
    // console.log(cart)
    useEffect(()=>{ fetch("/cart")
    .then((r) => {
      if (r.ok) {
        r.json().then(data => console.log(data));
        // r.json().then(data => dispatch(updateCart(data)));
      } else {
        r.json().then(data => console.log(data));
      }
    });;},[])

    useEffect(() => {
        fetch('/bikes')
        .then((r) => {
          if (r.ok) {
            r.json().then(data => 
            //   console.log(data))
              dispatch(updateBike(data)))

          }else {
            r.json().then(data => console.log(data));
          }
        });
      }, []);

    const obj = {1: 5, 2: 1}
    let arr = []
    for(const key in obj){
        arr.push(<p>Bike id:{key}, quantity:{obj[key]} Model:{bikes[key].model}</p>)
    }
    console.log(arr)

    return (
        <div>
            <p>cart component</p>
            {false?<p>true</p>:<p>false</p>}
            {arr}
        </div>
    )
}

export default Cart