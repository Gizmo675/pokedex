import React, { useContext, useEffect, useState } from 'react';

import './pokemon.scss'
import PokemonContext from '../../contexts/PokemonContext';

const Pokemon = () => {

  const { pokemonData } = useContext(PokemonContext)

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
      {thisPokemon ? 
      <div className='card teal lighten-2'>
        <img 
          src={`https://pokeres.bastionbot.org/images/pokemon/${thisPokemon.id}.png`}
          alt={thisPokemon.name}
          />
        <h1>
          Nom: {thisPokemon.name}
        </h1>
        <h2>
          Poids: {thisPokemon.weight} kg
        </h2>
        <h2>
          Taille : {thisPokemon.height} pouces
        </h2>
        {/* <h2>
          Capacité : {thisPokemon.abilities.map(ability => {
            <ul>{ability.name}</ul>
          })}
        </h2> */}
      </div>
      : <h1>Chargement...</h1>}

      <button onClick={()=>{console.log(pokemonData)}}>
        Afficher details
      </button>
    </div>
  )
}

export default Pokemon;