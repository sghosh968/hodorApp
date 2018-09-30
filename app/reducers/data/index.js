import { combineReducers } from 'redux';
import SessionReducer from './session';
import TasksReducer from './tasks';

const dataReducers = combineReducers({
  session: SessionReducer,
  tasks: TasksReducer
});

export default dataReducers;