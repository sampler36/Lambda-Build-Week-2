import uuid from 'uuid';
import * as types from './actionTypes';


// create an async action creator login, that takes username and password,
// and hits the login api, and triggers a LOGIN_SUCCESS action with the userToken as payload.
export const login = (username, password) => dispatch => {
  fetch(`http://demo5884765.mockable.io/books/login?username=${username}&password=${password}`)
    .then(res => res.json())
    .then(data => {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data.userToken });
    });
};

export const deleteBookAsync = id => dispatch => {
  dispatch(spinnerOn());
  fetch(`http://demo5884765.mockable.io/books/${id}`, { method: 'DELETE' })
    .then(res => res.json())
    .then(data => {
      dispatch(deleteBook(data.id));
      dispatch(spinnerOff());
    });
};

export const getBooksAsync = () => dispatch => {
  dispatch(spinnerOn());
  fetch('http://demo5884765.mockable.io/books')
    .then(res => res.json())
    .then(books => {
      dispatch({ type: types.ADD_BOOKS, payload: books });
      dispatch(spinnerOff());
    });
};

export const addBookAsync = book => dispatch => {
  dispatch(spinnerOn());
  fetch(`http://demo5884765.mockable.io/books`, { method: 'POST', body: JSON.stringify(book) })
    .then(res => res.json())
    .then(book => {
      dispatch({ type: types.ADD_BOOK, payload: book });
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

export function deleteBook(id) {
  return {
    type: types.DELETE_BOOK,
    payload: id,
  };
}

export function addBook(author, text) {
  return {
    type: types.ADD_BOOK,
    payload: {
      id: uuid(),
      author,
      text,
    },
  };
}

export function makeBookOfTheDay(id) {
  return {
    type: types.MAKE_BOOK_OF_THE_DAY,
    payload: id,
  };
}
