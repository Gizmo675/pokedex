import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import './home.scss'

const Home = () => {

  const [pokemon, SetPokemon] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=200').then((response)=>{
      return (response).json()
    }).then(result => {
      console.log(result)
      SetPokemon(result.results)
    })
  })

  return (
    <div className='pokemonList'>
      {pokemon.map(poke => {
        return (
          <div className='card teal lighten-2'>
            <li>
              <Link to={poke.name}>{poke.name}</Link>
            </li>
          </div>
        )
      })}
    </div>
  )
}

export default Home;