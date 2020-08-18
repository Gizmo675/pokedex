import React, { createContext, useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

// Composants
import Home from './components/home'
import NavBar from './components/navbar'
import Pokemon from './components/pokemon';

// Reducers
import { initialState, pokemonReducer } from './reducers/pokemonReducer'
import PokemonContextProvider from './contexts/PokemonContext';

export const PokeContext = createContext()

function App() {
  const [state, dispatch] = useReducer(pokemonReducer, initialState)

  return (
    <div className="App">
      <PokemonContextProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <Home />      
            </Route>
            <Route path='/'>
              <Pokemon />
            </Route>
          </Switch>
        </BrowserRouter>
      </PokemonContextProvider>

    </div>
  );
}

export default App;
