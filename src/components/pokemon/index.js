import React, { useContext } from 'react';
import './pokemon.scss'
import PokemonContext from '../../contexts/PokemonContext';

const Pokemon = () => {

  const { allPokemon, onePokemon } = useContext(PokemonContext)

  return (
    <div className="pokemon-details">
      {onePokemon 
      ?
      <div>
        <h1>{onePokemon.name}</h1>
        <img 
          src={`https://pokeres.bastionbot.org/images/pokemon/${onePokemon.id}.png`}
          alt={onePokemon.name}
          />
      </div>
      :
        <h1>Chargement...</h1> 
       }
    </div>
  )
}

export default Pokemon;