import React from "react";
import styles from "./style.css";

import GameContextProvider from "../contexts/GameContext";
import Board from "../components/Board";

export default function Home() {
  return (
    <GameContextProvider>
      <Board />
    </GameContextProvider>
  );
}