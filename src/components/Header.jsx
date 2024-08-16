import React from 'react';
import '../styles/Header.sass';
import { Link } from 'react-router-dom';
import logoSite from '../assets/logoSite.png';

function Header() {
  return (
    <div className='header'>
      <Link to="/"><img src={logoSite} alt='Kasa-Logo' className='kasaLogo' /></Link>
      <nav className='listRoads'>
        <ul className='roads'>
          <li className='routePage'><Link to="/home" className='route'>Accueil</Link></li>
          <li className='routePage'><Link to="/about" className='route'>A propos</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

