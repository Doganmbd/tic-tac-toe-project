import React , {createContext, useState } from 'react';

export const GameContext = createContext();

const GameContextProvider = ({children}) => {

    const state = {

      };

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
}

export default GameContextProvider