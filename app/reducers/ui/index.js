import { combineReducers } from 'redux';
import testUiReducer from './test-ui';
import loginPageReducer from './login';
import signupPageReducer from './signup';
import newTaskPageReducer from './new-task';
import tasksListPageReducer from './tasks-list';

const uiReducers = combineReducers({
  testUI: testUiReducer,
  login: loginPageReducer,
  signup: signupPageReducer,
  newTaskPage: newTaskPageReducer,
  tasksListPageReducer: tasksListPageReducer
});

export default uiReducers;