import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
// import counterSlice from './features/counter/counter.slice'
// import logger from 'redux-logger'
// import boxSlice from "./features/box/box.slice";
import userSlice from "../reducers/userSlice";

const reducer = combineReducers({
  user: userSlice
});

const store = configureStore({
  reducer,
});

export default store;
