import React, { useContext } from 'react';
import './pokemon.scss'
import PokemonContext from '../../contexts/PokemonContext';

const Pokemon = () => {

  const { onePokemon } = useContext(PokemonContext)

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
        <h2>Poids : {onePokemon.weight} Kg</h2>
        <h2>Taille : {onePokemon.height} cm</h2>
      </div>
      :
        <h1>Chargement...</h1> 
       }
    </div>
  )
}

export default Pokemon;