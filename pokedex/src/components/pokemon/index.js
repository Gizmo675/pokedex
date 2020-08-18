import React, { useContext } from 'react';

import './pokemon.scss'
import { PokeContext } from '../../App';

const Pokemon = () => {

  const { state } = useContext(PokeContext)

  return (
    <div className="pokemon-details">
      <h1>
        Bonjour, je suis le pokemon
      </h1>
    </div>
  )
}

export default Pokemon;