import React , {createContext, useState } from 'react';

export const GameContext = createContext();

const GameContextProvider = ({children}) => {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);


    const state = {
        squares,
        setSquares,
        isXNext,
        setIsXNext,
        


      };

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
}

export default GameContextProvider