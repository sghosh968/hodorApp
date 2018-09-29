import { combineReducers } from 'redux';
import dataReducers from './data';
import uiReducers from './ui';

const rootReducer = combineReducers({
  data: dataReducers,
  ui: uiReducers
});

export default rootReducer;