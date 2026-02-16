import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";

// Action is combination of type and payload


const thunk=createAsyncThunk(
'productdeatils/fetxh',

async (args , thunkApi)=>{
    try{
        const response= fetch('https://fakestoreapi.com/products')
       const data = await response.json();
       return data; //ye jo data h yhe payload mae jayega
    }
    catch(error){
        return isRejectedWithValue(error.message);
    }
}

)