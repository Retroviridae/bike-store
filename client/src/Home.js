import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from "react";
import { decrement, increment, incrementByAmount } from './reduxComponents/counter/counterSlice'
import { createBike,deleteBike,updateBike } from './reduxComponents/bikes/bikesSlice'

function Home() {
  const count = useSelector((state) => state.counter.value)
  const bikes = useSelector((state) => state.bikes.value)
  const dispatch = useDispatch()
  
  const dbReset = ()=>{
    fetch('/reset')
    .then(resp=> resp.json())
    .then(data => console.log(data))}

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increase by 5
        </button>

      </div>

      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(createBike(2))}
        >
          Push
        </button>
        <span>{bikes}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(deleteBike(9))}
        >
          Pop
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(updateBike([1,2,3,4,5,6,7,8,9]))}
        >
          Update
        </button>

      </div>
      <button onClick={dbReset} variant="danger">Reset Database</button>
    </div>
  );
}

export default Home;