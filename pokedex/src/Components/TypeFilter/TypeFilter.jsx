import React, { useContext } from 'react'
import PokemonContext from '../Contex/PokemonContex';


export const TypeFilter = () => {

    const { selectedType, setSelectedType } =useContext(PokemonContext)


    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
      };


      return (
        <div>
          <label htmlFor="type-select">Selecciona un tipo:</label>
          <select
            id="type-select"
            value={selectedType}
            onChange={handleTypeChange}
          >
          <option value="">Todos</option>
          <option value="normal">Normal</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="electric">Electric</option>
          <option value="ice">Ice</option>
          <option value="fighting">Fighting</option>
          <option value="poison">Poison</option>
          <option value="ground">Ground</option>
          <option value="flying">Flying</option>
          <option value="psychic">Psychic</option>
          <option value="bug">Bug</option>
          <option value="rock">Rock</option>
          <option value="ghost">Ghost</option>
          <option value="dragon">Dragon</option>
          <option value="dark">Dark</option>
          <option value="steel">Steel</option>
          <option value="fairy">Fairy</option>
          </select>
        </div>
      );
    }
