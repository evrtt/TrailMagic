import React from "react";
import ReactDOM from "react-dom";
import {
  login,
  logout,
  signUp
} from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  
  //JUST FOR TESTING v
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.signUp = signUp;
  window.login = login;
  window.logout = logout;
  //JUST FOR TESTING ^
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})