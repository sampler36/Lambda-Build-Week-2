
import dummyComment from '../dataa/dummyComment';
// import * as types from './actionTypes';
// // =================================================================== REDUCERS  (pull out)
import * as types from './actionTypes';


export function comments(commentsArray = dummyComment, action) {
  switch (action.type) {
    case types.ADD_COMMENTS:
      return action.payload;
    case types.ADD_COMMENT:
      return commentsArray.concat(action.payload);
    case types.DELETE_COMMENT:
      return commentsArray.filter(comment => comment.id !== action.payload);
    default:
      return commentsArray;
  }
}

export function commentOfTheDay(commentId = null, action) {
  switch (action.type) {
    case types.MAKE_COMMENT_OF_THE_DAY:
      return action.payload;
    case types.DELETE_COMMENT:
      return commentId === action.payload ? null : commentId;
    default:
      return commentId;
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
