import { createSlice } from '@reduxjs/toolkit'

export const addressSlice = createSlice({
  name: 'address',
  initialState: {
    value: {
      firstName:"",
      lastName:"",
      address1:"",
      city:"",
      state:"",
      zip:""
    },
  },
  reducers: {

    updateAddress: (state, action) => {
        // console.log(action.payload)
      state.value = action.payload
    },

  },
}
)

// Action creators are generated for each case reducer function
export const { updateAddress } = addressSlice.actions

export default addressSlice.reducer