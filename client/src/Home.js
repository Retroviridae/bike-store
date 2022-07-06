import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from "react";
import BikeCard from './bikeList/BikeCard';
import { decrement, increment, incrementByAmount } from './reduxComponents/counter/counterSlice'
import { createBike,deleteBike,updateBike } from './reduxComponents/bikes/bikesSlice'
import cartSlice, { addToCart,deleteFromCart,updateCart } from './reduxComponents/cart/cartSlice'

function Home() {
  const count = useSelector((state) => state.counter.value)
  const bikes = useSelector((state) => state.bikes.value)
  const cart = useSelector((state) => state.cart.value)
  const dispatch = useDispatch()
  
  // const dbReset = ()=>{
  //   fetch('/reset')
  //   .then(resp=> resp.json())
  //   .then(data => console.log(data))}

  const getCart = ()=>{ fetch("/cart")
  .then((r) => {
    if (r.ok) {
      r.json().then(data => console.log(data));
      // r.json().then(data => dispatch(updateCart(data)));
    } else {
      r.json().then(data => console.log(data));
    }
  });;}

  const addCart = ()=>{ fetch("/add", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({"model":"giant talon", "price":500}),
  }).then((r) => {
    if (r.ok) {
      // r.json().then(data => console.log(data));
      dispatch(addToCart({"model":"giant talon", "price":500}));
      // r.json().then(data => console.log(data));
    } else {
      r.json().then(data => console.log(data));
    }
  });;}

    const handleRemove = (e)=>{
     fetch("/remove", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(e.target.id),
  }).then((r) => {
    if (r.ok) {
      // r.json().then(data => console.log(data));
      dispatch(deleteFromCart(e.target.id));
      // r.json().then(data => console.log(data));
    } else {
      r.json().then(data => console.log(data));
    }
  });;}


  const handleDeleteCart = () => {
    fetch("/cart", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        r.json().then(data => dispatch(updateCart(data)))
      }
    });
  };



  return (
    <div>
      Hello
    </div>
  );
}

export default Home;