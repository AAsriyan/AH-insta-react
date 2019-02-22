import React from "react";

const GameList = props => {
  return (
    <div className="gamelist">
      {props.games.map(game => {
        <div className="game">
          <h1>{game.name}</h1>
          <h2>{game.protagonist}</h2>
        </div>;
      })}
    </div>
  );
};

export default GameList;
