import React from 'react';
import { Link } from 'react-router-dom'

import './navbar.scss'

const Navbar = () => {

  return (
    <div className="navbar">
      <h1 className='pokedex'>
        <Link to='/'>Pokedex</Link>
      </h1>
    </div>
  )
}

export default Navbar;