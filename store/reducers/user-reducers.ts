import firebase from "firebase/compat/app";
import { AuthAction, AuthActionTypes, AuthUpdateFirebaseTokenType, UpdateUserSWRActionType, UserLogoutTypes, UserSignUpTypes } from "../action-types";

const initialState = {
  loading: false,
  user: null,
  error: null,
}
const userReducer = (state = initialState, action: AuthAction): any => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_REQUEST:
    case UserSignUpTypes.SIGNUP_REQUEST:
    case UserLogoutTypes.LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AuthActionTypes.LOGIN_SUCCESS:
    case UserSignUpTypes.SIGNUP_SUCCESS:
      console.log(`run here.... reducer`)
      console.log(`action.payload`, action.payload)
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case UserLogoutTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        user: null,
      };
    case 'auth/hydrate':
    case UpdateUserSWRActionType.UPDATE_USER_SWR_SUCCESS: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case AuthUpdateFirebaseTokenType.UPDATE_FIREBASE_TOKEN:
      const curUser = state.user ? state.user : {};
      return {
        ...state,
        user: {
          ...curUser,
          firebaseToken: action.payload,
        },
      };
    case AuthActionTypes.LOGIN_FAILURE:
    case UserSignUpTypes.SIGNUP_FAILURE:
    case UserLogoutTypes.LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export { userReducer }