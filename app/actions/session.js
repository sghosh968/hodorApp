import { LOGIN, LOGOUT } from './action-types';

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