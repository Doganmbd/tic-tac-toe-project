import React, { useContext } from "react";

import { GameContext } from "../contexts/GameContext";

export default function Reset() {
  const { setSquares, setIsXNext, setWhoIsWinner, setDraw, setLine } = useContext(GameContext);

  function handleClick() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWhoIsWinner(null);
    setDraw(false);
    setLine(null);
  }

  return (
    <p className="reset">
      <button type="button" onClick={handleClick}>
        Reset
      </button>
    </p>
  );
}