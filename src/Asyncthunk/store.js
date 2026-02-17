import { configureStore } from "@reduxjs/toolkit";
import  productsSlice from "./slicer1";
const stores =configureStore({
    reducer:{
        productsSlice:productsSlice
    }
})

export default stores;