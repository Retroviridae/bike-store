import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    value: [],
  },
  reducers: {
    updateOrder: (state,action) => {
      state.value = action.payload
    }
  },
}
)

// Action creators are generated for each case reducer function
export const { updateOrder } = orderSlice.actions

export default orderSlice.reducer