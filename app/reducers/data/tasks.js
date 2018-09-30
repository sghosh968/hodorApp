import { handleActions } from 'redux-actions';
import _ from 'lodash';
import {
  FETCH_TASKS_PENDING,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_ERROR,
  SET_TASKS,
  ADD_TASK
} from '../../actions/action-types';

const defaultState = {
  tasks: [],
  awaitingTransaction: false
};

export default handleActions({
  [FETCH_TASKS_PENDING]: (state) => ({ ...state, awaitingTransaction: true }),
  [FETCH_TASKS_SUCCESS]: (state) => ({ ...state, awaitingTransaction: false }),
  [FETCH_TASKS_ERROR]: (state) => ({ ...state, awaitingTransaction: false }),
  [SET_TASKS]: (state, action) => {
    const tasks = _.get(action, 'tasks', []);
    return {
      ...state,
      tasks
    }
  },
  [ADD_TASK]: (state, action) => {
    const newTask = _.get(action, 'task');
    const allTasks = _.get(state, 'tasks');
    const newArray = allTasks.slice();
    newArray.push(newTask);
    return {
      ...state,
      tasks: newArray
    }
  }
}, defaultState);