import { createSlice } from '@reduxjs/toolkit'

export const mycounterSlice = createSlice({
  name: 'mycounter',
  initialState: {
    myvalue: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.myvalue += 2
    },
    decrement: (state) => {
      state.myvalue -= 2

    },
    incrementByAmount: (state, action) => {
      state.myvalue += action.payload
    
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = mycounterSlice.actions

export default mycounterSlice.reducer