

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    nav: [
        {
            title:'/'
        },
        {
            title:'UI Designs'
        },
        {
            title:'Apps'
        },
        {
            title:'About Me'
        },
        {
            title:'Contact Me'
        }
    ]
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
 
})

export default navSlice.reducer