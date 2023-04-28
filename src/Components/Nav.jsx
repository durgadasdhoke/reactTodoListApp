import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav>
      <h1>To do List</h1>
      <p>
        <Link to="/home" className='home'>Home</Link>
        <Link to="/contact" className='contact'>Contact</Link>
        <Link to="/about" className='about'>About</Link>
      </p>
      </nav>
    </div>
  )
}

export default Nav;
