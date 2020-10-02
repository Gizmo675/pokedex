import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom'
import './home.scss'
import { PokemonContext } from '../../contexts/PokemonContext';

const Home = () => {

  const { 
    allPokemon,
    SetOnePokemon
  } = useContext(PokemonContext)
  const [searchPokemon, setSearchPokemon] = useState('')

  function search(name) {
    return name.filter(poke => poke.name.toLowerCase().indexOf(searchPokemon) > -1)
  }

  function pokemonDetails(pokemon) {
    SetOnePokemon(pokemon)
    console.log(pokemon)
  }

  return (
      <>
      <div id='searching'>
        <form className="search-poke">
          <label htmlFor="search">Tu cherche un pokemon ?</label>
          <input
            type="text"
            id="search"
            onChange={(event) => setSearchPokemon(event.target.value)}
            value={searchPokemon}
            ></input>
          <button type="submit">Rechercher</button>
        </form>
      </div>
      <div className="pokemonList">
        {search(allPokemon).map((poke) => {
          return (
            <div className={`card ${poke.type}`} key={poke.name}>
              <div id='container'>
                <h1
                  onClick={()=>pokemonDetails(poke)}
                >
                  <Link to={poke.name}>{poke.name}</Link>
                </h1>
                <img src={poke.picture} alt={poke.name} />
                <p style={{color:'black'}}>ID: {poke.id}</p>
              </div>
            </div>
          );
        })}
      </div>
      
    </>    
  );
}

export default Home;