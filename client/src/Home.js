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
  
  const dbReset = ()=>{
    fetch('/reset')
    .then(resp=> resp.json())
    .then(data => console.log(data))}

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
      {/* <p>Notes:</p> 
      <p>1. Site is for demo only. Don't use sensitive addresses or credit card info.</p>
      <p>2. Reset the DB before use.</p>
      <p>3. Sample users: username:"Updog", password:"1234"; username:"KateSkate", password:"1234";</p>
      <p>4. Big thanks to https://99spokes.com/ . They helped me with all of the bike seed data.</p>
      <p>5. Bike prices were randomized, the 99spokes link has the accurate price. </p> */}
      <button onClick={dbReset}>Reset DB</button>
    </div>
  );
}

export default Home;