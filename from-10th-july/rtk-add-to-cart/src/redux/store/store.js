import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice(s)/cartSlice";
import productReducer from "../slice(s)/productSlice";


export const store = configureStore({
    reducer:{
        cart:cartReducer,
        product:productReducer,
    }
})