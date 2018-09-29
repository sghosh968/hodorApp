import { handleActions } from 'redux-actions';
import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR } from '../../actions/action-types';

const defaultState = {
  awaitingTransaction: false
};

export default handleActions({
  [LOGIN_PENDING]: (state) => ({ ...state, awaitingTransaction: true }),
  [LOGIN_SUCCESS]: (state) => ({ ...state, awaitingTransaction: false }),
  [LOGIN_ERROR]: (state) => ({ ...state, awaitingTransaction: false })
}, defaultState);