// import { useSelector, useDispatch } from 'react-redux'
// import React, { useEffect, useState } from "react";
// import BikeCard from './bikeList/BikeCard';
// import { decrement, increment, incrementByAmount } from './reduxComponents/counter/counterSlice'
// import { createBike,deleteBike,updateBike } from './reduxComponents/bikes/bikesSlice'
// import cartSlice, { addToCart,deleteFromCart,updateCart } from './reduxComponents/cart/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import OrderCard from './OrderCard'
import AdminOrderCard from './AdminOrderCard'

function Home() {
  const orders = useSelector((state) => state.order.value)
  const me = useSelector((state) => state.me.value)
  // console.log(orders)
  

  return (
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/John_Boyd_Dunlop_%28c1915%29.jpg/170px-John_Boyd_Dunlop_%28c1915%29.jpg"
        alt="bicycle"
        loading="lazy"
      />
      {/* <p>Notes:</p>  */}
      {/* <p>1. Site is for demo only. Don't use sensitive addresses or credit card info.</p>
      <p>2. Reset the DB before use.</p>
      <p>3. Sample users: username:"Updog", password:"1234"; username:"KateSkate", password:"1234";</p> */}
      <p>Big thanks to https://99spokes.com/ . They helped me with all of the bike seed data.</p>
      {/* {me.id==1?orders.map(order=><OrderCard key={order.id} order={order}/>):null} */}
      {/* {me.id==1?orders.map(order=><AdminOrderCard key={order.id} order={order}/>):null} */}
      {/* <button onClick={dbReset}>Reset DB</button> */}
    </div>
  );
}

export default Home;