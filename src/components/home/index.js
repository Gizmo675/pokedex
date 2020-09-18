import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import './home.scss'
import { PokemonContext } from '../../contexts/PokemonContext';

const Home = () => {

  const { allPokemon } = useContext(PokemonContext)

  return (
    <div className='pokemonList'>
      {allPokemon.map(poke => {
        return (
          <div className={`card ${poke.type}`} key={poke.name}>
            <h1>
              <Link to={poke.name}>
                {poke.name}
              </Link>
            </h1>
            <img src={poke.picture} alt={poke.name} />
            <p>{poke.id}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Home;