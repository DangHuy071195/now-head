import { AuthUpdateFirebaseTokenType, UpdateUserAction, UpdateUserSWRActionType } from './../action-types/index';
import axios from "axios";
import { AuthActionTypes, UserLoginAction, UserLogoutTypes, UserSignUpTypes } from "../action-types";
import { Dispatch } from "react";
import UserI from '@/interfaces/UserInterface';


const baseUrl = 'http://localhost:3000';

export const userLogin = (provider: string, token: string) => {
  return async (dispatch: Dispatch<UserLoginAction>) => {
    dispatch({ type: AuthActionTypes.LOGIN_REQUEST });
    try {
      const response = await axios.post(`${baseUrl}/api/auth/${provider}`, {
        provider,
        token
      });
      console.log(`response.data.user`, response.data)
      localStorage.setItem('user', JSON.stringify(response.data.user));
      dispatch({ type: AuthActionTypes.LOGIN_SUCCESS, payload: response.data.user });
    } catch (error: any) {
      dispatch({ type: AuthActionTypes.LOGIN_FAILURE, payload: error.message });
    }
  }
}


export const userSignUp = (username: string, token: string) => {
  return async (dispatch: any) => {
    dispatch({ type: UserSignUpTypes.SIGNUP_REQUEST });
    try {
      const res = await axios.post(`${baseUrl}/api/auth/sign-up`, { username, token });
      dispatch({ type: UserSignUpTypes.SIGNUP_SUCCESS, payload: res.data });
    } catch (error: any) {
      dispatch({ type: UserSignUpTypes.SIGNUP_SUCCESS, payload: error.message });
    }
  }
}


export const userLogout = () => {
  return async (dispatch: any) => {
    dispatch({ type: UserLogoutTypes.LOGOUT_REQUEST });
    try {
      // await axios.post(`${baseUrl}/api/auth/logout`);
      localStorage.removeItem('user');
      dispatch({ type: UserLogoutTypes.LOGOUT_SUCCESS });
    } catch (error: any) {
      dispatch({ type: UserLogoutTypes.LOGOUT_FAILURE, payload: error.message });
    }
  }
}


export const updateFirebaseToken = (token: string) => {
  return async (dispatch: any) => {
    dispatch({ type: AuthUpdateFirebaseTokenType.UPDATE_FIREBASE_TOKEN, payload: token });
  }
}


export const realtimeUser = (user: UserI) => {
  return async (dispatch: Dispatch<UpdateUserAction>) => {
    try {
      dispatch({ type: UpdateUserSWRActionType.UPDATE_USER_SWR_REQUEST });
      const existedUser = JSON.parse(localStorage.getItem('user') || '{}');
      localStorage.setItem('user', JSON.stringify({ ...existedUser, ...user }));
      dispatch({ type: UpdateUserSWRActionType.UPDATE_USER_SWR_SUCCESS, payload: user });
    } catch (error: any) {
      dispatch({ type: UpdateUserSWRActionType.UPDATE_USER_SWR_FAILURE, payload: error.message });
    }
  }
}