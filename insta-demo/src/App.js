import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import smashdata from "./smashdata";
import GameList from "./components/GameList";
import Search from "./components/Search";
class App extends Component {
  constructor() {
    super();
    this.state = {
      games: []
    };
  }

  componentDidMount() {
    this.setState({
      games: smashdata
    });
  }

  render() {
    // console.log(smashdata);
    return (
      <div className="app">
        <Search />
        <GameList games={this.state.games} />
      </div>
    );
  }
}

export default App;
