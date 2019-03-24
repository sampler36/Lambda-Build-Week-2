import uuid from 'uuid';
import * as types from './actionTypes';



// create an async action creator login, that takes username and password,
// and hits the login api, and triggers a LOGIN_SUCCESS action with the userToken as payload.
export const login = (username, password) => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/comments/login?username=${username}&password=${password}`)
    .then(res => res.json())
    .then(data => {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data.userToken });
    });
};

export const deleteCommentAsync = id => dispatch => {
  dispatch(spinnerOn());
  fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, { method: 'DELETE' })
    .then(res => res.json())
    .then(data => {
      dispatch(deleteComment(data.id));
      dispatch(spinnerOff());
    });
};

export const getCommentsAsync = () => dispatch => {
  dispatch(spinnerOn());
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(comments => {
      dispatch({ type: types.ADD_COMMENTS, payload: comments });
      dispatch(spinnerOff());
    });
};

export const addCommentAsync = comment => dispatch => {
  dispatch(spinnerOn());
  fetch(`https://jsonplaceholder.typicode.com/comments`, { method: 'POST', body: JSON.stringify(comment) })
    .then(res => res.json())
    .then(comment => {
      dispatch({ type: types.ADD_COMMENT, payload: comment });
      dispatch(spinnerOff());
    });
};

export function spinnerOn() {
  return {
    type: types.SPINNER_ON,
  };
}

export function spinnerOff() {
  return {
    type: types.SPINNER_OFF,
  };
}

export function deleteComment(id) {
  return {
    type: types.DELETE_COMMENT,
    payload: id,
  };
}

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

