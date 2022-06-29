import { createSlice } from '@reduxjs/toolkit'

export const bikesSlice = createSlice({
  name: 'bikes',
  initialState: {
    value: [],
  },
  reducers: {
    createBike: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = [...state.value, (state.value.length+1)]
    },
    deleteBike: (state) => {
      state.value = state.value.slice(0,(state.value.length-1))
    },
    updateBike: (state, action) => {
      state.value = state.value.filter(e => e%2 === 0)
    },
  },
}
)

// Action creators are generated for each case reducer function
export const { createBike, deleteBike, updateBike } = bikesSlice.actions

export default bikesSlice.reducer