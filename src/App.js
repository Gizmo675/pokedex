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

  const [allPokemon, SetAllPokemon] = useState([])
  const [onePokemon, SetOnePokemon] = useState({})

  // Je recupere la liste des 151 premiers pokemon
  function pokemonList() {
    // Je requete l'api avec les 151 premiers
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => {
        return response.json();
      })
      .then((allPokemon) => {
        // Pour chaque pokemon de la list allPokemon j'execute la methode fetchPokemonComplet
        allPokemon.results.map((pokemon) => {
          return fetchPokemonComplet(pokemon)
        });
      });
  }

  // Je recupere la totalité des infos des pokemons
  function fetchPokemonComplet(pokemon){
    const fullPokemon = {};
    // Je stock l'url du pokemon
    const url = pokemon.url;
    // Je stock le nom du pokemon
    const name = pokemon.name;

    // Je requete l'url de chez pokemon pour avoir les infos de chaque pokemon
    fetch(url)
    .then(response => response.json())
    .then((data) => {
      // console.log(data)
      
      // Je recupere la photo de chaque pokemon
      fullPokemon.picture = data.sprites.front_default;
      // Je recupere le type de chaque pokemon
      fullPokemon.type = data.types[0].type.name;
      // Je recupere l'identifiant de chaque pokemon
      fullPokemon.id = data.id;
      // Je recupere le poid de chaque pokemon
      fullPokemon.weight = data.weight
      // Je recupere la taille de chaque pokemon
      fullPokemon.height = data.height

      // Je recupere les noms francais des pokemons
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
      .then(response => response.json())
      .then((frenchName) => {
        // console.log(frenchName)
        fullPokemon.name = frenchName.names[4].name
        // Je pousse dans le state les infos du pokemon actuel en preservant les infos des pokemons precedent
        SetAllPokemon(allPokemon => [...allPokemon, fullPokemon])
      })
    })
  }

  useEffect(() => {
    pokemonList()
  }, [])

  return (
        <BrowserRouter>
          <PokemonContext.Provider 
          value={{ 
            allPokemon,
            SetAllPokemon,
            onePokemon,
            SetOnePokemon 
          }}>
          <NavBar />
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
  );
}

export default App;
