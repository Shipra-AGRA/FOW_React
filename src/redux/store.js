import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter:counterReducer
    //or we can write like this [counterSlice.name]:counterSlice.reducer
  },
})