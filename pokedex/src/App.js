import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

// Composants
import Home from './components/home'
import NavBar from './components/navbar'
import Pokemon from './components/pokemon';

// Context
import { PokemonContext } from './contexts/PokemonContext';

function App() {

  const [pokemonData, SetPokemonData] = useState()
  const [pokemon, SetPokemon] = useState([])

  async function pokemonList(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((response)=>{
      return (response).json()
    }).then(result => {
      SetPokemon(result.results)
    })
  }

  useEffect(() => {
    pokemonList()
  }, [])

  return (
    // <div className="App">
        <BrowserRouter>
          <NavBar />
          <PokemonContext.Provider value={{ pokemonData, SetPokemonData, pokemon, SetPokemon }}>
          <Switch>
            <Route exact path='/'>
              <Home />      
            </Route>
            <Route path='/'>
              <Pokemon />
            </Route>
          </Switch>
          </PokemonContext.Provider>
        </BrowserRouter>
    // </div>
  );
}

export default App;
