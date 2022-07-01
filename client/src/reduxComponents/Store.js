import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import bikesReducer from './bikes/bikesSlice'
import meReducer from './me/meSlice'
import cartReducer from './cart/cartSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    bikes: bikesReducer,
    me: meReducer,
    cart: cartReducer

  },
})