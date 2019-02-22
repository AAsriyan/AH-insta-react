import React from "react";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfGames: props.game.games,
      added: false
    };
  }

  buttonHandler = () => {
    if (!this.state.added) {
      this.setState(prevState => ({
        numOfGames: prevState.numOfGames + 1,
        added: !prevState.added
      }));
    } else {
      this.setState(prevState => ({
        numOfGames: prevState.numOfGames - 1,
        added: !prevState.added
      }));
    }
  };

  render() {
    return (
      <div className="game">
        <h1>{this.props.game.name}</h1>
        <h2>{this.props.game.protagonist}</h2>
        <h3>{this.state.numOfGames}</h3>
        <button onClick={this.buttonHandler}>
          {!this.state.added ? "Add game" : "Remove game"}
        </button>
      </div>
    );
  }
}

export default Game;
