import React, { useContext, useEffect, useState } from 'react';
import './pokemon.scss'
import PokemonContext from '../../contexts/PokemonContext';

const Pokemon = () => {

  const { pokemonData } = useContext(PokemonContext)

  const [ thisPokemon, SetThisPokemon ] = useState()
  const [ frenchPokemon, SetFrenchPokemon ] = useState(null)

  useEffect(() => {
    fetch(pokemonData)
    .then((res)=>{return (res).json()})
    .then(result => {
      SetThisPokemon(result)
      console.log('jai les infos sur le pokemone en question')
    })
  }, [])

  const frenchName = ()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${thisPokemon.id}`)
    .then((response)=>{return (response).json()})
    .then(result=>{
      SetFrenchPokemon(result.names[4].name)
    })
  }

  return (
    <div className="pokemon-details">
      {thisPokemon ? 
      <div>
        <img 
          src={`https://pokeres.bastionbot.org/images/pokemon/${thisPokemon.id}.png`}
          alt={thisPokemon.name}
          />
        <h1>
          Nom: {frenchPokemon ? frenchPokemon : thisPokemon.name}
        </h1>
        <h2>
          Poids: {thisPokemon.weight} kg
        </h2>
        <h2>
          Taille : {thisPokemon.height} pouces
        </h2>
      </div>
      : <h1>Chargement...</h1>
      }
      <button 
        onClick={()=>{console.log(thisPokemon)}}
      >
        Afficher details
      </button>
      <button onClick={()=>frenchName()}>
        Nom francais
      </button>
    </div>
  )
}

export default Pokemon;