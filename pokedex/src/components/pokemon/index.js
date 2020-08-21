import React, { useContext } from 'react';

import './pokemon.scss'
import PokemonContext from '../../contexts/PokemonContext';

const Pokemon = () => {

const { pokemonData, SetPokemonData } = useContext(PokemonContext)

  return (
    <div className="pokemon-details">
      <h1>
        {pokemonData}
      </h1>
      <button onClick={()=>{SetPokemonData('je suis gizmo')}}>
        Changer de nom
      </button>
    </div>
  )
}

export default Pokemon;