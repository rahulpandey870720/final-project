import { configureStore } from "@reduxjs/toolkit";
import { Rootreducer } from "../reducer/Rootreducer";
import createSagaMiddleware from "redux-saga"
import { root } from "../saga/Root.saga";

const sagamiddleware = createSagaMiddleware ();
const store = configureStore({
    reducer:Rootreducer(),
    middleware:[sagamiddleware ],
    devTools: process.env.NODE_ENV==='development'?true:false
})
sagamiddleware.run (root)
export default store;
