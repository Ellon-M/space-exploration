import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="Navigation-bar">
      <div className="navigation-list">
        <h2>Space Exploration</h2>
        <ul>
          <li><Link activeClassName="active-link" to="/"> Rockets </Link></li>
          <li><Link activeClassName="active-link" to="/Missions"> Missions </Link></li>
          <li><Link activeClassName="active-link" to="/Profile"> My Profile </Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
