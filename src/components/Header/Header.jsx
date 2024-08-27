import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Header/Header.scss'
import logoSite from '../../assets/logoSite.png';

function Header() {
  return (
    <div className='header'>
      <NavLink to="/"><img src={logoSite} alt='Kasa-Logo' className='kasaLogo' /></NavLink>
      <nav className='listRoads'>
        <ul className='roads'>
          <li className='routePage'>
            <NavLink 
              to="/home" 
              className={({ isActive }) => isActive ? 'route active' : 'route'}
            >
              Accueil
            </NavLink>
          </li>
          <li className='routePage'>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? 'route active' : 'route'}
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
