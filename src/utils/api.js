import { useState } from 'react';

  function GetPokemons() {

    const [pokemon, SetPokemon] = useState([])
    
    return fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then(response => {
      return response.json()
    })
    .then(result => {
      const allPokemon = result.results.map(pokemon => {
        const { url } = pokemon
        return {
          ...allPokemon,
          url
        }
      })
      return allPokemon
    })
  }

export default GetPokemons;