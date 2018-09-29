import {
  LOGIN,
  LOGOUT,
  SIGNUP_PENDING,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from './action-types';

export function login() {
  // return dispatch => {
  //   dispatch({ type: LOGIN });
  // };
  return { type: LOGIN };
}

export function logout() {
  // return (dispatch) => {
  //   dispatch({
  //     type: LOGOUT
  //   });
  // };
  return { type: LOGOUT };
}

export function signupPending() {
  return { type: SIGNUP_PENDING };
}

export function signupSuccess() {
  return { type: SIGNUP_SUCCESS };
}

export function signupError() {
  return { type: SIGNUP_ERROR };
}

export function loginPending() {
  return { type: LOGIN_PENDING };
}

export function loginSuccess() {
  return { type: LOGIN_SUCCESS };
}

export function loginError() {
  return { type: LOGIN_ERROR };
}