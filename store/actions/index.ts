import { AuthType, UserLoginTypes } from "../action-types/auth-type";

export interface AuthActions {
  type: AuthType
  payload?: any
}


export interface UserLoginAction {
  type: UserLoginTypes
  payload?: any
}