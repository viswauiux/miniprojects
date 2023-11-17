import { configureStore } from '@reduxjs/toolkit'
import navReducer from './navSlice'
import navToggleReducer from './toggleslice'

export const store = configureStore({
  reducer:{
   nav: navReducer,
   navToggle:navToggleReducer
}
})

