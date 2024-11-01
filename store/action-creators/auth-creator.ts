import { Dispatch } from "react";
import { AuthType, UserLoginTypes } from "../action-types/auth-type";
import { AuthActions, UserLoginAction } from "../actions";
import axios from "axios";
import { signOutProvider } from "@/libs/firebase";



const logout = () => {
  return (dispatch: Dispatch<AuthActions>) => {
    signOutProvider();
  };
};


const login = (token: string, provider: string) => {
  console.log(`run here...`)
  return async (dispatch: Dispatch<UserLoginAction>) => {
    dispatch({ type: UserLoginTypes.LOGIN_REQUEST });
    try {
      const resSign = await axios.post(`/api/user/auth/${provider}`, { token });
      localStorage.setItem('token', resSign.data.token);
      dispatch({ type: UserLoginTypes.LOGIN_SUCCESS, payload: { token: resSign.data.token } });
    } catch (error) {
      console.log(`error`, error)
      dispatch({ type: UserLoginTypes.LOGIN_FAILURE, payload: error });
    }
  };
}

export { login, logout }