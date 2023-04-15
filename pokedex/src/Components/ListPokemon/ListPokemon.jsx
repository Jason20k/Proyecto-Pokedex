import React, { useEffect, useState } from 'react' 
import axios from 'axios' 
import DisplayPokemon from '../DisplayPokemon/DisplayPokemon';

 
export default function ListPokemon() { 
    
   const [pokebolas, setPokebolas] =useState([ 
    {"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"} 
   ]); 
 
   const traerPokebolas = () => { 
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=15') 
    .then((respuesta)=>{ 
     setPokebolas(respuesta.data.results); 
    }) 
} 
 
 useEffect(() =>{ 
    traerPokebolas() 
 },[pokebolas.lenght]) 
 
  return ( 
    <div> 
        <DisplayPokemon pokemones={pokebolas}/> 
    </div> 
  ) 
}
