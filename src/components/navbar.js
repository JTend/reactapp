import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div>
        <NavLink exact={true} to="/" activeClassName="active">Home</NavLink>
      </div>
      <div>
        <NavLink to="/cards" activeClassName="active">Cards</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;
