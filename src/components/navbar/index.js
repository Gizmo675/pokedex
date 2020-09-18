import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import './navbar.scss'

const Navbar = () => {

  const [active, setActive] = useState(false)

  return (
    <div className="navbar">
      <h1 className='pokedex'>
        <Link to='/'>Pokedex</Link>
      </h1>
      <form className={active ? 'search-poke-active' : 'search-poke'}>
        <label
          htmlFor='search'
        >
          Tu cherche un pokemon ?
        </label>
        <input
          type='text'
          id='search'
          onInput={!setActive}
        ></input>
        <button type='submit' >Rechercher</button>
      </form>
    </div>
  )
}

export default Navbar;