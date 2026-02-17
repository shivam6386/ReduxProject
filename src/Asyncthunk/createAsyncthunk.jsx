import { useDispatch, useSelector } from "react-redux"
import  {fetchProducts } from "./slicer1";
import React, { useEffect } from "react";

import TodoItem from "./Details";



export function Thunk(){

      const dispatch= useDispatch();
      const {data,loading}=useSelector((state)=>state.productsSlice);

      useEffect(()=>{

      const value =dispatch(fetchProducts());
      console.log("value",value);


       },[]);
        
       if (loading){
        return <h1>Loading</h1>

       }

   
    return (

       <ul className='list-group'>
            {data.map((todo) => (
                <TodoItem id={todo.id} title={todo.title} price={todo.price} />
            ))}
        </ul>
    )
}