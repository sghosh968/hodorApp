import { handleActions } from 'redux-actions';
import { TASKS_LIST_PAGE_TRANSACTION_COMPLETE, TASKS_LIST_PAGE_TRANSACTION_PENDING } from '../../actions/action-types';

const defaultState = {
  awaitingTransaction: false
};

export default handleActions({
  [TASKS_LIST_PAGE_TRANSACTION_PENDING]: (state) => ({ ...state, awaitingTransaction: true }),
  [TASKS_LIST_PAGE_TRANSACTION_COMPLETE]: (state) => ({ ...state, awaitingTransaction: false })
}, defaultState);