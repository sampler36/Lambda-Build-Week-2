import uuid from 'uuid';
import * as types from './actionTypes';



export const login = (username, password) => dispatch => {
    fetch(`http://gabe.mockable.io/quotes/login?username=${username}&password=${password}`)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'LOGIN_SUCCESS', payload: data.userToken });
      });
  };

// =================================================================== ACTION CREATORS  (pull out)
// 4- ACTION CREATOR deleteQuote
export function deleteComment(id) {
  return {
    type: types.DELETE_COMMENT,
    payload: id,
  };
}

// 5- ACTION CREATOR makeQuoteOfTheDay
export function makeCommentOfTheDay(id) {
  return {
    type: types.MAKE_COMMENT_OF_THE_DAY,
    payload: id,
  };
}

// 6- ACTION CREATOR addQuote
export function addComment(author, text) {
  return {
    type: types.ADD_COMMENT,
    payload: {
      id: uuid(),
      author,
      text,
    },
  };
}
