import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import Home from './components/home'
import NavBar from './components/navbar'
import Pokemon from './components/pokemon';

function App() {

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
