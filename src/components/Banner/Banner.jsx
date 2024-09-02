import React from 'react';
import './Banner.scss'; // Importation du fichier de style SCSS pour le composant Banner

function Banner({ bgIMG, text = '', opacity = 0 }) {
  return (
    <div className="banner">
      <img src={bgIMG} alt="Banner" />
      {opacity > 0 && <div className="overlay" style={{ opacity: opacity }}></div>} {/* Overlay conditionnel */}
      {text && <span className="centered-text">{text}</span>}
    </div>
  );
}

export default Banner;
