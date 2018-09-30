import { handleActions } from 'redux-actions';
import { NEW_TASK_PAGE_TRANSITION_PENDING, NEW_TASK_PAGE_TRANSITION_COMPLETE } from '../../actions/action-types';

const defaultState = {
  awaitingTransaction: false
};

export default handleActions({
  [NEW_TASK_PAGE_TRANSITION_PENDING]: (state) => ({ ...state, awaitingTransaction: true }),
  [NEW_TASK_PAGE_TRANSITION_COMPLETE]: (state) => ({ ...state, awaitingTransaction: false })
}, defaultState);