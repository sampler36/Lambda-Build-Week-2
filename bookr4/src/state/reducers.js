
import dummyComment from '../data/dummyComment';
// import * as types from './actionTypes';
// // =================================================================== REDUCERS  (pull out)
import * as types from './actionTypes';


export function comments(state = dummyComment, action) {
  switch (action.type) {
    case types.ADD_COMMENTS:
      return action.payload;
    case types.ADD_COMMENT:
      return state.concat(action.payload);
    case types.DELETE_COMMENT:
      return state.filter(comment => comment.id !== action.payload);
    default:
      return state;
  }
}

export function spinner(isOn = false, action) {
  switch (action.type) {
    case types.SPINNER_ON:
      return true;
    case types.SPINNER_OFF:
      return false;
    default:
      return isOn;
  }
}
