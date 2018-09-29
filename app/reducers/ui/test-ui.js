import { handleActions } from 'redux-actions';
import { ON, OFF } from '../../actions/action-types';

const defaultState = {
  uiFlag: false
};

export default handleActions({
  [ON]: (state) => ({ ...state, uiFlag: true }),
  [OFF]: (state) => ({ ...state, uiFlag: false })
}, defaultState);