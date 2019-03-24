import * as types from './actionTypes';


export function books(booksArray = [], action) {
  switch (action.type) {
    case types.ADD_BOOKS:
      return action.payload;
    case types.ADD_BOOK:
      return booksArray.concat(action.payload);
    case types.DELETE_BOOK:
      return booksArray.filter(book => book.id !== action.payload);
    default:
      return booksArray;
  }
}

export function bookOfTheDay(bookId = null, action) {
  switch (action.type) {
    case types.MAKE_BOOK_OF_THE_DAY:
      return action.payload;
    case types.DELETE_BOOK:
      return bookId === action.payload ? null : bookId;
    default:
      return bookId;
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
