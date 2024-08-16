import React from 'react';
import '../styles/Error404.sass';
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <div className="error-container">
      <h1 className='code'>404</h1>
      <p className='noExist'>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Error404;
