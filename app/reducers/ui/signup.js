import { handleActions } from 'redux-actions';
import { SIGNUP_PENDING, SIGNUP_SUCCESS, SIGNUP_ERROR } from '../../actions/action-types';

const defaultState = {
  awaitingTransaction: false
};

export default handleActions({
  [SIGNUP_PENDING]: (state) => ({ ...state, awaitingTransaction: true }),
  [SIGNUP_SUCCESS]: (state) => ({ ...state, awaitingTransaction: false }),
  [SIGNUP_ERROR]: (state) => ({ ...state, awaitingTransaction: false })
}, defaultState);