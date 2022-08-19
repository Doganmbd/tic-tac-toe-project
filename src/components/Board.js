import React, { useContext, useEffect, useState } from "react";

import calculateWinner from "../utils/calculateWinner";
import { GameContext } from "../contexts/GameContext";

import Player from "./Player";
import Reset from "./Reset";
import Square from "./Square";
import Winner from "./Winner";
import Draw from "./Draw";

export default function Board() {
  const { squares, setWhoIsWinner, setLine, whoIsWinner } =
    useContext(GameContext);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    setIsOver(!squares.includes(null));
    const winner = calculateWinner(squares);
    if (winner) {
      setWhoIsWinner(winner[0]);
      setLine(winner[1]);
    }
  },[] );

  return (
    <div className="board-container">
      <Player />
      <Reset />
      <div className="board">
        {squares.map((value, index) => (
          <Square value={value} index={index} />
        ))}
      </div>
      {whoIsWinner ? <Winner /> : ""}
      {isOver ? <Draw /> : ""}
    </div>
  );
}
