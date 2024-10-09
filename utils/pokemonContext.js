import { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonContextProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState({});

  const pokemonContextData = {
    pokemonList,
    setPokemonList,
  };

  return (
    <PokemonContext.Provider value={pokemonContextData}>
      {children}
    </PokemonContext.Provider>
  );
};
