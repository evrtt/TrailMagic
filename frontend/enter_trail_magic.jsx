import React from "react";
import ReactDOM from "react-dom";
import {
  login,
  logout,
  signUp
} from './actions/session_actions';
import { windowResize } from './actions/ui_actions';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { "id": window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  };
    //JUST FOR TESTING v
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.signUp = signUp;
  window.login = login;
  window.logout = logout;
  
  //JUST FOR TESTING ^
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
  window.addEventListener('resize', () => {
    store.dispatch(windowResize(window.innerWidth, window.innerHeight))
  });
});