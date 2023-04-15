import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Card({pokemon}) {

    const [onePokemon, setOnePokemon] = useState({
        name: '',
        id: '',
        types: [],
        sprites: {front_default: ''},
        height: '',
        weight: ''
    });
  
    const datosPokemon = (url) => {
      axios.get(url)
      .then((respuesta) => {
      console.log(respuesta.data);
      setOnePokemon(respuesta.data)
      })
    }

    useEffect(() => {
        datosPokemon(pokemon.url)
      },[pokemon.url])



  return (
    <div style={{display: 'inline-block'}}>
        <div className='card m-4 vista-pokemones'  style={{width: '18rem'}}>
            <div className='card-header text-black'>{onePokemon.name} ID: {onePokemon.id}</div>
            <div className='card-body'>
              <img src={onePokemon.sprites.front_default} alt="imagen pokemon"></img>
                <h1 className='card-title text-black'>Dato del pokemon</h1>
                <p className='card-text text-secondary'> Altura: {onePokemon.height}</p>
                <p className='card-text text-secondary'> Peso: {onePokemon.weight}</p>
                {onePokemon.types.map((type, index) => (
                <p key={index} className='card-text text-secondary'> Tipo: {type.type.name}</p>
                ))}
            </div>
        </div>
    </div>
  )
}

