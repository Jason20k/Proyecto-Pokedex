import { useState } from "react";
import PokemonContext from "./PokemonContex";


export const ProviderPokemon = ({children}) => {

  const [selectedType, setSelectedType] = useState('');

  
  return (
    <PokemonContext.Provider value={{
      selectedType,
      setSelectedType
    }}>
        {children}
    </PokemonContext.Provider>
  );
};

