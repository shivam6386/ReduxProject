import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";

// Action is combination of type and payload


const fetchProducts=createAsyncThunk(
'productdeatils/fetch',

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

const productsSlice= createSlice({
    name:'productsSlice',
    initalState:{data:[],loading:false,error:null},
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.pending,(state)=>{
            state.loading=true;
            state.loading=null;
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            
            state.data=action.payload;
            state.loading=false;
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            
            state.error=action.payload;
            state.loading=false;
        })
    }

})

export default productsSlice.reducer;
export {productsSlice};