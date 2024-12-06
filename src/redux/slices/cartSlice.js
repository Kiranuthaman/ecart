import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : 'cart',
    initialState:[],
    reducers: {
        addItemToCart : (state,action)=>{
            state.push(action.payload)
        },
        removeCart : (state , action)=>{
          return  state.filter((item)=>item.id != action.payload)
        },
        emptyCart : (state)=>{
            return state = []
        }
    }
})

export const {addItemToCart , removeCart , emptyCart} = cartSlice.actions
export default cartSlice.reducer