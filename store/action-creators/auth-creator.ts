import { Dispatch } from "react";
import { AuthType, UserLoginTypes } from "../action-types/auth-type";
import { AuthActions, UserLoginAction, UserLogoutAction, UserLogoutTypes } from "../actions";
import axios from "axios";
import { signOutProvider } from "@/libs/firebase";



const logout = () => {
  return async (dispatch: Dispatch<UserLogoutAction>) => {
    dispatch({ type: UserLogoutTypes.LOGOUT_REQUEST });
    try {
      await signOutProvider();
      dispatch({ type: UserLogoutTypes.LOGOUT_SUCCESS });
    } catch (error) {
      dispatch({ type: UserLogoutTypes.LOGOUT_FAILURE, payload: error });
    }
  };
};


const login = (token: string, provider: string) => {
  console.log(`run here...`)
  return async (dispatch: Dispatch<UserLoginAction>) => {
    dispatch({ type: UserLoginTypes.LOGIN_REQUEST });
    try {
      const resSign = await axios.post(`/api/user/auth/${provider}`, { token });
      const user = resSign.data.user;
      const resToken = resSign.data.token;
      localStorage.setItem('accessToken', resToken);
      localStorage.setItem('user', JSON.stringify(user));

      dispatch({ type: UserLoginTypes.LOGIN_SUCCESS, payload: { token: resToken, user } });
    } catch (error) {
      console.log(`error`, error)
      dispatch({ type: UserLoginTypes.LOGIN_FAILURE, payload: error });
    }
  };
}

export { login, logout }