import {
  GOOGLE_SIGN_IN_ERROR,
  GOOGLE_SIGN_IN_START,
  GOOGLE_SIGN_IN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT_ERROR,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  REGISTER_ERROR,
  REGISTER_START,
  REGISTER_SUCCESS,
  SET_USER,
} from "./actionType";

import {signInWithPopup} from "firebase/auth";
import {auth, googleAuthProvider} from "../../firebase"

const registerStart = () => {
  return { type: REGISTER_START };
};

const registerSucces = (payload) => {
  return { type: REGISTER_SUCCESS, payload };
};

const registerError = (payload) => {
  return { type: REGISTER_ERROR, payload };
};

const loginStart = () => {
  return { type: LOGIN_START };
};

const loginSucces = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};

const loginError = (payload) => {
  return { type: LOGIN_ERROR, payload };
};

const googleSignInStart = () => {
  return { type: GOOGLE_SIGN_IN_START };
};

const googleSignInSuccess = (payload) => {
  return { type: GOOGLE_SIGN_IN_SUCCESS, payload };
};

const googleSignInFailure = (payload) => {
  return { type: GOOGLE_SIGN_IN_ERROR, payload };
};

const userLogoutLoading = () => {
  return { type: LOGOUT_START };
};

const userLogoutSuccess = () => {
  return { type: LOGOUT_SUCCESS };
};

const userLogoutError = (payload) => {
  return { type: LOGOUT_ERROR, payload };
};

export const setUser = (payload) => {
  return { type: SET_USER, payload };
};

export const googleSignInInitiate = () => (dispatch) => {
    dispatch(googleSignInStart());
    signInWithPopup(auth, googleAuthProvider)
      .then((res) => {
        dispatch(googleSignInSuccess(res.user));
      })
      .catch((err) => {
        dispatch(googleSignInFailure(err.message));
      });
  };
