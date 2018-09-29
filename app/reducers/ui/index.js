import { combineReducers } from 'redux';
import testUiReducer from './test-ui';
import loginPageReducer from './login';
import signupPageReducer from './signup';

const uiReducers = combineReducers({
  testUI: testUiReducer,
  login: loginPageReducer,
  signup: signupPageReducer
});

export default uiReducers;