import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Container from './Container';
import { comments, spinner } from './state/reducers';

// create custom middleware to save 'userToken' to local storage on LOGIN_SUCCESS

const customMiddleware = store => next => action => {
  console.log('some fire deya', store.getState());
  if (action.type === 'LOGIN_SUCCESS') {
    localStorage.setItem('userToken', action.payload);
  }
  next(action);
};


const rootReducer = combineReducers({
  comments,
  spinner,

});

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(customMiddleware, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.querySelector('#root'),
);
