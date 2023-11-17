import { createSlice } from "@reduxjs/toolkit";

export const navToggleSlice =  createSlice({
    name:'navToggle',
    initialState:{
        nav:'/'
    },
    reducers:{
        changeNav:(state,action)=>{
            state.nav = action.payload
        }
    }
})

export const { changeNav } = navToggleSlice.actions

export default navToggleSlice.reducer

