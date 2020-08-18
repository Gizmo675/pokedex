import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import './home.scss'

const Home = () => {

  const [pokemon, SetPokemon] = useState([])
  const [onePokemon, SetOnePokemon] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1')
      .then((response)=>{
        return (response).json()
      }).then(result => {
        SetPokemon(result.results)
        // console.log(result.results)
      })
  }, [])

  return (
    <div className='pokemonList'>
      {pokemon.map(poke => {
        
        return (
          <div className='card teal lighten-2' key={poke.url}>
            <h1 onClick={() => SetOnePokemon(poke.url)}>
              <Link
                to={poke.name}              
              >
                {poke.name}
              </Link>
            </h1>
          </div>
        )
      })}
    </div>
  )
}

export default Home;