import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

// Composants
import Home from './components/home'
import NavBar from './components/navbar'
import Pokemon from './components/pokemon';

// Context
import { PokemonContext } from './contexts/PokemonContext';

function App() {

  const [pokemonData, SetPokemonData] = useState('Je suis le pokemon')

  return (
    // <div className="App">
        <BrowserRouter>
          <NavBar />
          <PokemonContext.Provider value={{ pokemonData, SetPokemonData }}>
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
