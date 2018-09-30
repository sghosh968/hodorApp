import {
  TASKS_LIST_PAGE_TRANSACTION_COMPLETE,
  TASKS_LIST_PAGE_TRANSACTION_PENDING
} from './action-types';

export function newTaskPageTransactionPending() {
  return { type: TASKS_LIST_PAGE_TRANSACTION_PENDING };
}

export function newTaskPageTransactionComplete() {
  return { type: TASKS_LIST_PAGE_TRANSACTION_COMPLETE };
}