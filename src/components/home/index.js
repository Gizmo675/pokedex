import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import './home.scss'
import { PokemonContext } from '../../contexts/PokemonContext';

const Home = () => {

  const { allPokemon, SetPokemonData, pokemon } = useContext(PokemonContext)

  return (
    <div className='pokemonList'>
      {allPokemon.map(poke => {
        return (
          <div className='card teal lighten-2' key={poke.name}>
            <h1 onClick={() => {SetPokemonData(poke.url)}}>
              <Link to={poke.name}>
                {poke.name}
              </Link>
            </h1>
            <img href={poke.picture} alt={poke.name} />
            <h3>
              type: {poke.type}
            </h3>
          </div>
        )
      })}
    </div>
  )
}

export default Home;