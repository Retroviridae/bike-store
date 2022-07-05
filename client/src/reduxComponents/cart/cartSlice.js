import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: {},
  },
  reducers: {
    addToCart: (state,action) => {
      state.value = [...state.value, action.payload]
    },
    deleteFromCart: (state,action) => {
      state.value = state.value.slice(0,action.payload).concat(state.value.slice(action.payload+1,state.value.length))
    },
    updateCart: (state, action) => {
      state.value = action.payload
    },
  },
}
)

// Action creators are generated for each case reducer function
export const { addToCart, deleteFromCart, updateCart } = cartSlice.actions

export default cartSlice.reducer