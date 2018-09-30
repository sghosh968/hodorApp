import {
  NEW_TASK_PAGE_TRANSITION_COMPLETE,
  NEW_TASK_PAGE_TRANSITION_PENDING
} from './action-types';

export function newTaskPageTransitionPending() {
  return { type: NEW_TASK_PAGE_TRANSITION_PENDING };
}

export function newTaskPageTransitionComplete() {
  return { type: NEW_TASK_PAGE_TRANSITION_COMPLETE };
}