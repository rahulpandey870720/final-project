import { combineReducers } from "@reduxjs/toolkit";
import categoryReducer from "./category.reducer";
import productReducer from "./product.reducer";
import useReducer from "./users.reducer";

export const Rootreducer=()=> combineReducers({
    category : categoryReducer ,
    product: productReducer,
    user: useReducer
})