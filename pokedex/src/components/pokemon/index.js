import React, { useContext, useEffect, useState } from 'react';

import './pokemon.scss'
import PokemonContext from '../../contexts/PokemonContext';

const Pokemon = () => {

  const { pokemonData, SetPokemonData } = useContext(PokemonContext)

  const [ thisPokemon, SetThisPokemon ] =useState()

  useEffect(() => {
    fetch(pokemonData)
    .then((res)=>{return (res).json()})
    .then(result => {
      // console.log(result)
      SetThisPokemon(result)
    })
  }, [])

  return (
    <div className="pokemon-details">
      <h1>
        {pokemonData}
      </h1>
      <button onClick={console.log(thisPokemon)}>
        Changer de nom
      </button>
    </div>
  )
}

export default Pokemon;