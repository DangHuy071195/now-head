import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user-reducers";
const reducers = combineReducers({
  user: userReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;