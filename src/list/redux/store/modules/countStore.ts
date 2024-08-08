import {  createSlice } from '@reduxjs/toolkit'

const countStore = createSlice({
  name: 'count',
  initialState: {
    count: 10
  },
  reducers: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  }
})

export const { increment, decrement } = countStore.actions
export default countStore.reducer