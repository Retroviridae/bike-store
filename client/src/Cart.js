import { useSelector } from 'react-redux'
import React, { useEffect, useState } from "react";
// import bikesSlice, { createBike,deleteBike,updateBike } from './reduxComponents/bikes/bikesSlice'
// import cartSlice, { updateCart} from './reduxComponents/cart/cartSlice';
import CartCard from './CartCard';

function Cart(){
  const bikes = useSelector((state) => state.bikes.value)
  const cart = useSelector((state) => state.cart.value)
    // const dispatch = useDispatch()    

    const [display,setDisplay]= useState([])
    const [total,setTotal]= useState(0)

    // let array = []

    // useEffect(() => {
    //     fetch('/bikes')
    //     .then((r) => {
    //       if (r.ok) {
    //         r.json().then(data => 
    //           dispatch(updateBike(data)))
    //       }else {
    //         r.json().then(data => console.log(data));
    //       }
    //     });
    //   }, []);


      // useEffect(()=>{ fetch("/cart")
      // .then((r) => {
      //   if (r.ok) {
      //     // r.json().then(data => console.log(data));
      //     r.json().then(data => dispatch(updateCart(data)),
      //     );
          
      //   } else {
      //     r.json().then(data => console.log(data));
      //   }
      // });;},[])

      useEffect(()=>{
        // console.log(cart)
        let array = []
        let sum = 0
        if (bikes.length>0){
          for(const key in cart){
            // array.push(<p>Bike id:{key}, quantity:{cart[key]} Bike:{bikes[key].model}</p>)
            array.push(key)
            // console.log(bikes)
            // console.log(key)
            // console.log(bikes[key])
            sum = sum + (bikes[key].price*cart[key])
          }
          // console.log(array)
          // console.log(display)

          setTotal(sum)
          setDisplay(array)
        }
      },[cart,bikes])

      // function displayCart(){
      //   console.log(cart)
      //   for(const key in cart){
      //     // array.push(<p>Bike id:{key}, quantity:{cart[key]} Bike:{bikes[key].model}</p>)
      //     array.push(key)
      // }
      // console.log(array)
      // }


    // console.log(arr)
    // {bikes.map((e,index)=>{return(<BikeCard index={index} key={index}/>)})}

    return (
        <div>
            {total>0?<p>Total:${total.toLocaleString("en-US")}</p>:"Cart Empty"}
            {display.map(e=>{return(<CartCard key={e} index={e} />)})}
        </div>
    )
}

export default Cart