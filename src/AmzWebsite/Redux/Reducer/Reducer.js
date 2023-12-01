import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const Productstore = createSlice({
    name: 'ProductList',
    initialState: {
        productList : [],
        productDataList : []
    },
    reducers:{
        getProducts:(state,action)=>{
            state.productList,action.payload;
        },
        placeProducts:(state,action)=>{
            state.productDataList,action.payload;
        }
    }
})

export const {getProducts,placeProducts}=Productstore.actions;
export default Productstore.reducer;