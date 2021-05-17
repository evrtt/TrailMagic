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
import { searchTrails, fetchTrails } from './utils/trails_api_util';

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

  window.searchTrails = searchTrails;
  window.fetchTrails = fetchTrails;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
  window.addEventListener('resize', () => {
    store.dispatch(windowResize(window.innerWidth, window.innerHeight))
  });
});