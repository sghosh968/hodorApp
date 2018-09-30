import { handleActions } from 'redux-actions';
import { LOGIN, LOGOUT } from '../../actions/action-types';

const defaultState = {
  isLoggedIn: true
};

export default handleActions({
  [LOGIN]: (state) => ({ ...state, isLoggedIn: true }),
  [LOGOUT]: (state) => ({ ...state, isLoggedIn: false })
}, defaultState);