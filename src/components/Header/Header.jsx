import React from 'react'; // Importation de la bibliothèque React
import { NavLink } from 'react-router-dom'; // Importation du composant NavLink pour la navigation entre les pages
import '../Header/Header.scss'; // Importation du fichier de style SCSS pour le composant Header
import logoSite from '../../assets/logoSite.png'; // Importation du logo du site

function Header() {
  return (
    <div className='header'> 
      <NavLink to="/"><img src={logoSite} alt='Kasa-Logo' className='kasaLogo' /></NavLink> 
      <nav className='listRoads'> 
        <ul className='roads'> 
          <li className='routePage'> 
            <NavLink 
              to="/home" 
              className={({ isActive }) => isActive ? 'route active' : 'route'} // Applique une classe différente si le lien est actif
            >
              Accueil
            </NavLink>
          </li>
          <li className='routePage'> {/* Élément de la liste pour la route A propos */}
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? 'route active' : 'route'} // Applique une classe différente si le lien est actif
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