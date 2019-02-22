import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

import GamesPage from "./auth/GamesPage";
import LoginPage from "./auth/LoginPage";
import authenticate from "./auth/authenticate";

const Visible = authenticate(GamesPage)(LoginPage);

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return <Visible />;
  }
}

export default App;
