import { createSlice } from '@reduxjs/toolkit'

export const meSlice = createSlice({
  name: 'me',
  initialState: {
    value: {},
  },
  reducers: {
    update: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload
    // {...state.value,
    //   "id": action.payload.id,
    //   "username": action.payload.username
    // }
      // console.log(state)
      // console.log("meSlice:")
      // console.log(action.payload.id)
      // console.log(action.payload.username)
      // console.log(action.payload.password)

    }
  },
}
)

// Action creators are generated for each case reducer function
export const { update } = meSlice.actions

export default meSlice.reducer