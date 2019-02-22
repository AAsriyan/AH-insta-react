import React from "react";
import uuidv1 from "uuid";
import Game from "./Game";

const GameList = props => {
  //   console.log(uuidv1());
  return (
    <div className="gamelist">
      {props.games.map(g => {
        return <Game key={uuidv1()} game={g} />;
      })}
    </div>
  );
};
export default GameList;
