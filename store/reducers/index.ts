import { combineReducers } from "@reduxjs/toolkit";
import { userLoginReducer } from "./userLoginReducer";

const reducer = combineReducers({
  // Add your reducers here
  user: userLoginReducer,
});


export default reducer
export type RootState = ReturnType<typeof reducer>