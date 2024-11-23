import { Auth } from "mongodb";

export enum AuthActionTypes {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
}
type AuthLoginRequestAction = {
  type: AuthActionTypes.LOGIN_REQUEST;
};
type AuthLoginSuccessAction = {
  type: AuthActionTypes.LOGIN_SUCCESS;
  payload: any;
};
type AuthLoginFailureAction = {
  type: AuthActionTypes.LOGIN_FAILURE;
  payload: string;
};

export type UserLoginAction = AuthLoginRequestAction | AuthLoginSuccessAction | AuthLoginFailureAction;

export enum UserSignUpTypes {
  SIGNUP_REQUEST = 'SIGNUP_REQUEST',
  SIGNUP_SUCCESS = 'SIGNUP_SUCCESS',
  SIGNUP_FAILURE = 'SIGNUP_FAILURE',
}
type SignUpRequestAction = {
  type: UserSignUpTypes.SIGNUP_REQUEST;
};
type SignUpSuccessAction = {
  type: UserSignUpTypes.SIGNUP_SUCCESS;
  payload: any;
};
type SignUpFailureAction = {
  type: UserSignUpTypes.SIGNUP_FAILURE;
  payload: string;
};
export type SignUpAction = SignUpRequestAction | SignUpSuccessAction | SignUpFailureAction;



export enum UserLogoutTypes {
  LOGOUT_REQUEST = 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE = 'LOGOUT_FAILURE',
}

type LogoutRequestAction = {
  type: UserLogoutTypes.LOGOUT_REQUEST;
};
type LogoutSuccessAction = {
  type: UserLogoutTypes.LOGOUT_SUCCESS;
};
type LogoutFailureAction = {
  type: UserLogoutTypes.LOGOUT_FAILURE;
  payload: string;
};

type AuthHydrateAction = {
  type: 'auth/hydrate';
  payload: any;
}
export enum AuthUpdateFirebaseTokenType {
  UPDATE_FIREBASE_TOKEN = 'UPDATE_FIREBASE_TOKEN'
}

export type AuthUpdateFirebaseToken = {
  type: AuthUpdateFirebaseTokenType.UPDATE_FIREBASE_TOKEN;
  payload: string;
}

export enum UpdateUserSWRActionType {
  UPDATE_USER_SWR_REQUEST = 'UPDATE_USER_SWR_REQUEST',
  UPDATE_USER_SWR_SUCCESS = 'UPDATE_USER_SWR_SUCCESS',
  UPDATE_USER_SWR_FAILURE = 'UPDATE_USER_SWR_FAILURE',
}

export type UpdateUserSWRRequest = {
  type: UpdateUserSWRActionType.UPDATE_USER_SWR_REQUEST;
}
export type UpdateUserSWRSuccess = {
  type: UpdateUserSWRActionType.UPDATE_USER_SWR_SUCCESS;
  payload: any;
}

export type UpdateUserSWRFailure = {
  type: UpdateUserSWRActionType.UPDATE_USER_SWR_FAILURE;
  payload: string;
}

export type UpdateUserAction = UpdateUserSWRRequest | UpdateUserSWRSuccess | UpdateUserSWRFailure;

export type AuthUpdateFirebaseTokenAction = AuthUpdateFirebaseToken;
export type LogoutAction = LogoutRequestAction | LogoutSuccessAction | LogoutFailureAction;

export type AuthAction = UserLoginAction | SignUpAction | LogoutAction | AuthHydrateAction | AuthUpdateFirebaseTokenAction | UpdateUserAction;
