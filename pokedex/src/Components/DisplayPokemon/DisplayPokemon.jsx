import React from 'react'  
import Card from '../Card/Card'  
  
export default function DisplayPokemon({pokemones}) {  
  
  
  return (  
    <div>  
        {pokemones.map((pokemon,indice)=>  
        <Card key={indice} pokemon={pokemon}/>  
        )}  
    </div>  
  )  
}
