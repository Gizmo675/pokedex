import React, {useState, useEffect} from 'react';
import './home.scss'

const Home = () => {

  const [pokemon, SetPokemon] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/').then((response)=>{
      return (response).json()
    }).then(result => {
      console.log(result)
      SetPokemon(result.results)
    })
  })

  return (
    <div>
      {pokemon.map(poke => {
        return (
          <div className='card'>
            <h1>
              {poke.name}
            </h1>
          </div>
        )
      })}
    </div>
  )
}

export default Home;