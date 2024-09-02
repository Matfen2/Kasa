import React from 'react'; // Importation de la bibliothèque React
import '../Footer/Footer.scss'; // Importation du fichier de style SCSS pour le composant Footer
import footerLogo from '../../assets/logoFooter.png'; // Importation du logo du footer

function Footer() {
  return (
    <div className='footer'> 
      <img src={footerLogo} alt='LogoFooter' className='footerLogo' /> 
      <p className='copy'>© 2020 Kasa. All rights reserved</p> 
    </div>
  );
}

export default Footer; 