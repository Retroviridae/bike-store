import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: {},
  },
  reducers: {
    addToCart: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
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