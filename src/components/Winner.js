import React, { useContext } from "react";

import { GameContext } from "../contexts/GameContext";

export default function Winner() {
  const { whoIsWinner } = useContext(GameContext);

  return <h1>{whoIsWinner ? `The Winner is: ${whoIsWinner}` : ""}</h1>;
}