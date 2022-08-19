import React , {createContext, useState } from 'react';

export const GameContext = createContext();

const GameContextProvider = ({children}) => {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [whoIsWinner, setWhoIsWinner] = useState(null);
    const [draw, setDraw] = useState(false);
    const [line, setLine] = useState(null);

    const state = {
        squares,
        setSquares,
        isXNext,
        setIsXNext,
        whoIsWinner,
        setWhoIsWinner,
        draw,
        setDraw,
        line,
        setLine,
        
      };

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
}

export default GameContextProvider