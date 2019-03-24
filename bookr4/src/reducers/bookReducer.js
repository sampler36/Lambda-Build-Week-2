import {
    GET_BOOKS,
    ADD_BOOK,
    DELETE_BOOK,
    BOOK_LOADING
  } from '../actions/types';
  
  const initialState = {
    items: [],
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_BOOKS:
        return {
          ...state,
          items: action.payload,
          loading: false
        };
      case DELETE_BOOK:
        return {
          ...state,
          items: state.items.filter(book => book._id !== action.payload)
        };
      case ADD_BOOK:
        return {
          ...state,
          items: [action.payload, ...state.items]
        };
      case BOOK_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }