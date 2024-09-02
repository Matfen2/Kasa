import React, { useState } from 'react'; // Importation de React et des hooks useState, useRef, useEffect
import '../Collapse/Collapse.scss'; // Importation des styles SCSS pour le composant Collapse

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false); // État pour contrôler si le collapse est ouvert ou fermé

  const toggleCollapse = () => {
    setIsOpen(!isOpen); // Inverse l'état isOpen à chaque clic
  };

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}> {/* Appliquer la classe 'open' si le collapse est ouvert */}
      <div className="collapse-header" onClick={toggleCollapse}> {/* En-tête du collapse, cliquable pour ouvrir/fermer */}
        <h2>{title}</h2> 
        <i className={`chevron-icon fa-solid fa-chevron-up ${isOpen ? 'open' : ''}`}></i> 
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}> {/* Contenu qui se replie/déplie */}
        {content} {/* Affichage du contenu passé en props */}
      </div>
    </div>
  );
}

export default Collapse; 