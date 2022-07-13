import { createSlice } from '@reduxjs/toolkit'

export const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    value: {
      cardName:"",
      cardNumber:"",
      expDate:"",
      cvv:""
    },
  },
  reducers: {

    updatePayment: (state, action) => {
        // console.log(action.payload)
      state.value = action.payload
    },

  },
}
)

// Action creators are generated for each case reducer function
export const { updatePayment } = paymentSlice.actions

export default paymentSlice.reducer