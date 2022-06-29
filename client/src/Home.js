import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from "react";
import { decrement, increment, incrementByAmount } from './reduxComponents/counter/counterSlice'
import { createBike,deleteBike,updateBike } from './reduxComponents/bikes/bikesSlice'

function Home() {
  const count = useSelector((state) => state.counter.value)
  const bikes = useSelector((state) => state.bikes.value)
  const dispatch = useDispatch()

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
          onClick={() => dispatch(updateBike())}
        >
          Filter
        </button>

      </div>
    </div>
  );
}

export default Home;