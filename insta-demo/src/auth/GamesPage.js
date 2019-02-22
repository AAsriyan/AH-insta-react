import React, { Component } from "react";

import smashdata from "../smashdata";
import GameList from "../components/GameList";
import Search from "../components/Search";

class GamesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      searchTerm: ""
    };
  }

  componentDidMount() {
    this.setState({
      games: smashdata
    });
  }

  changeHandler = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div className="app">
        <Search
          searchTerm={this.state.searchTerm}
          changeHandler={this.changeHandler}
        />
        <GameList
          games={this.state.games.filter(game =>
            game.name
              .toLowerCase()
              .includes(this.state.searchTerm.toLowerCase())
          )}
        />
      </div>
    );
  }
}

export default GamesPage;
