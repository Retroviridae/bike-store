import { createSlice } from '@reduxjs/toolkit'

export const stepSlice = createSlice({
  name: 'step',
  initialState: {
    value: 0,
  },
  reducers: {
    forward: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = 1
    },
    last: (state) => {
      state.value = 2
    }
  },
}
)

// Action creators are generated for each case reducer function
export const { forward, last } = stepSlice.actions

export default stepSlice.reducer