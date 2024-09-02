import React from 'react'; // Importation de la bibliothèque React
import homeLogo from '../../assets/home.png'; // Importation de l'image de la bannière
import '../Banner/Banner.scss'; // Importation du fichier de style SCSS pour le composant Banner

function Banner() {
  return (
    <div className="banner"> 
      <img src={homeLogo} alt="Banner" /> 
      <span className="centered-text">Chez vous, partout et ailleurs</span> 
    </div>
  );
}

export default Banner; 