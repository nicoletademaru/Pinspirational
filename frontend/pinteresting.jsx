import React from "react";
import ReactDOM from "react-dom";
import { login, logout, signup } from "./actions/session_actions";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  ReactDOM.render(<h1>Yay you made it!</h1>, root);

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
});