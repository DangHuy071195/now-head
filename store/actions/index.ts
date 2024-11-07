import { AuthType, UserLoginTypes } from "../action-types/auth-type";

export interface AuthActions {
  type: AuthType
  payload?: any
}



export interface UserLoginRequest {
  type: UserLoginTypes.LOGIN_REQUEST
}

export interface UserLoginSuccess {
  type: UserLoginTypes.LOGIN_SUCCESS
  payload: any
}

export interface UserLoginFailure {
  type: UserLoginTypes.LOGIN_FAILURE
  payload: any
}

export type UserLoginAction = UserLoginRequest | UserLoginSuccess | UserLoginFailure;

export enum UserLogoutTypes {
  LOGOUT_REQUEST = 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE = 'LOGOUT_FAILURE'
}
export interface UserLogoutRequest {
  type: UserLogoutTypes.LOGOUT_REQUEST
}
export interface UserLogoutSuccess {
  type: UserLogoutTypes.LOGOUT_SUCCESS
}
export interface UserLogoutFailure {
  type: UserLogoutTypes.LOGOUT_FAILURE
  payload: any
}

export type UserLogoutAction = UserLogoutRequest | UserLogoutSuccess | UserLogoutFailure;
