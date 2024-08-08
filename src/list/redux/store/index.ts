import { configureStore } from '@reduxjs/toolkit'
import countReducer from './modules/countStore'

const store = configureStore({
  reducer: {
    countStore: countReducer,
  },
})
export default store
