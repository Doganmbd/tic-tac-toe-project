import React , {createContext, useState } from 'react';

export const GameContext = createContext();

const GameContextProvider = ({children}) => {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const state = {
        squares,
        setSquares,
        
      };

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
}

export default GameContextProvider