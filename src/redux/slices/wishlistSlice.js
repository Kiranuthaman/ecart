import { createSlice } from "@reduxjs/toolkit";

export  const wishlistSlice = createSlice({
    name : 'wishlist',
    initialState : [],
    reducers : {
        addWishlistitems : (state,action) =>{
            state.push(action.payload)
        },
        removeWishlistItem : (state,action)=>{
           return state.filter((item)=>item.id != action.payload)
        }
    }
})

export  const {addWishlistitems , removeWishlistItem} = wishlistSlice.actions
export default wishlistSlice.reducer