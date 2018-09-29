import { combineReducers } from 'redux';
import SessionReducer from './session';

const dataReducers = combineReducers({
  session: SessionReducer
});

export default dataReducers;