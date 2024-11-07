import { UserLoginTypes } from "../action-types/auth-type";
import { UserLoginAction, UserLogoutAction, UserLogoutTypes } from "../actions";

export const userLoginReducer = (state = { accessToken: null, loading: false, error: null, user: null }, action: UserLoginAction | UserLogoutAction) => {
  console.log(`action.type`, action.type)
  switch (action.type) {

    case UserLoginTypes.LOGIN_REQUEST, UserLogoutTypes.LOGOUT_REQUEST:
      return { loading: true };
    case UserLoginTypes.LOGIN_SUCCESS:
      return { accessToken: action.payload.token, loading: false, user: action.payload.user };
    case UserLogoutTypes.LOGOUT_SUCCESS:
      return { accessToken: null, loading: false, user: null };
    case UserLoginTypes.LOGIN_FAILURE, UserLogoutTypes.LOGOUT_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};