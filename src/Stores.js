import { configureStore } from "@reduxjs/toolkit";
import reactSlicer from "./Slice1";

const stores =configureStore({
    reducer:{
        slice1:reactSlicer
    }
})

export default stores;