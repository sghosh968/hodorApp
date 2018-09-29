import { combineReducers } from 'redux';
import testUiReducer from './test-ui';

const uiReducers = combineReducers({
  testUI: testUiReducer
});

export default uiReducers;