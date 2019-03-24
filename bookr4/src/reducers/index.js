import { combineReducers } from 'redux';
import bookReducer from './itemReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
  book: bookReducer,
  error: errorReducer,
  auth: authReducer
});