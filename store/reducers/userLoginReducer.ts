import { UserLoginTypes } from "../action-types/auth-type";
import { UserLoginAction } from "../actions";

export const userLoginReducer = (state = { token: null, loading: false, error: null }, action: UserLoginAction) => {
  console.log(`action.type`, action.type)
  switch (action.type) {

    case UserLoginTypes.LOGIN_REQUEST:
      return { loading: true };
    case UserLoginTypes.LOGIN_SUCCESS:
      return { token: action.payload.token, loading: false };
    case UserLoginTypes.LOGIN_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};