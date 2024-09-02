import React, { useState, useRef, useEffect } from 'react'; // Importation de React et des hooks useState, useRef, useEffect
import '../Collapse/Collapse.scss'; // Importation des styles SCSS pour le composant Collapse

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false); // État pour contrôler si le collapse est ouvert ou fermé
  const contentRef = useRef(null); // Référence pour accéder au DOM de la partie contenue

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.height = `${contentRef.current.scrollHeight}px`; // Définir la hauteur dynamique lorsque ouvert
      contentRef.current.style.padding = '15px 20px'; // Ajouter du padding pour l'intérieur du contenu
    } else {
      contentRef.current.style.height = '0'; // Réduire la hauteur à zéro si fermé
      contentRef.current.style.padding = '0 20px'; // Réduire le padding à zéro
    }
  }, [isOpen]); // Exécuter cet effet à chaque changement d'état isOpen

  const toggleCollapse = () => {
    setIsOpen(!isOpen); // Inverse l'état isOpen à chaque clic
  };

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}> {/* Appliquer la classe 'open' si le collapse est ouvert */}
      <div className="collapse-header" onClick={toggleCollapse}> {/* En-tête du collapse, cliquable pour ouvrir/fermer */}
        <h2>{title}</h2> 
        <i className={`chevron-icon fa-solid fa-chevron-up ${isOpen ? 'open' : ''}`}></i> 
      </div>
      <div className="collapse-content" ref={contentRef}> {/* Contenu qui se replie/déplie */}
        {content} {/* Affichage du contenu passé en props */}
      </div>
    </div>
  );
}

export default Collapse; 