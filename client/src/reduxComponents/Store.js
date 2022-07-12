import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import bikesReducer from './bikes/bikesSlice'
import meReducer from './me/meSlice'
import cartReducer from './cart/cartSlice'
import addressReducer from './address/addressSlice'
import paymentReducer from './payment/paymentSlice'
import errorReducer from './errors/errorSlice'
import orderReducer from './orders/orderSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    bikes: bikesReducer,
    me: meReducer,
    cart: cartReducer,
    address: addressReducer,
    payment: paymentReducer,
    error: errorReducer,
    order: orderReducer
  },
})