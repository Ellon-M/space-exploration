import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="Navigation-bar">
      <div className="navigation-list">
        <h2>Space Exploration</h2>
        <ul>
          <li><NavLink to="/" className={(navData) => (navData.isActive ? 'active-link' : 'none')}> Rockets </NavLink></li>
          <li><NavLink to="/Missions" className={(navData) => (navData.isActive ? 'active-link' : 'none')}> Missions </NavLink></li>
          <li><NavLink to="/Profile" className={(navData) => (navData.isActive ? 'active-link' : 'none')}> My Profile </NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
