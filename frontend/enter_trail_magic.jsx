import React from "react";
import ReactDOM from "react-dom";
import * as SessionUtil from './utils/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
  window.signUp = SessionUtil.signUp;
  window.login = SessionUtil.login;
  window.logout = SessionUtil.logout;
  const root = document.getElementById('root');
  ReactDOM.render(<p>OHLA</p>, root);
})