import {
  FETCH_TASKS_PENDING,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_ERROR,
  SET_TASKS,
  ADD_TASK
} from './action-types';

export function fetchTasksPending() {
  return { type: FETCH_TASKS_PENDING };
}

export function fetchTasksSuccess() {
  return { type: FETCH_TASKS_SUCCESS };
}

export function fetchTasksError() {
  return { type: FETCH_TASKS_ERROR };
}

export function setTasks(tasks) {
  return { type: SET_TASKS, tasks };
}

export function addTask(task) {
  return { type: ADD_TASK, task };
}