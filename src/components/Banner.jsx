import React from 'react';
import homeLogo from '../assets/home.png'
import '../styles/Banner.sass';

function Banner() {
  return (
    <div className="banner">
      <img src={homeLogo} alt="Banner" />
      <span className="centered-text">Chez vous, partout et ailleurs</span>
    </div>
  );
}

export default Banner;
