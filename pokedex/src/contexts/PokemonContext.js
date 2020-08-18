import React, { createContext, Component } from 'react'

export const PokemonContext = createContext()

class PokemonContextProvider extends Component {
  state = { 
    pokemon: {}
   }

  render() { 
    return ( 
      <PokemonContext.Provider value={{...this.state}}>
        {this.props.children}
      </PokemonContext.Provider>
     );
  }
}
 
export default PokemonContextProvider;