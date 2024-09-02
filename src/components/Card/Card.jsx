import React from 'react'; // Importation de React
import '../Card/Card.scss'; // Importation des styles SCSS pour le composant Card
import { useNavigate } from 'react-router-dom'; // Importation du hook useNavigate pour la navigation

function Card({ id, title, cover }) {
  const navigate = useNavigate(); // Hook pour la navigation

  const handleClick = () => {
    navigate(`/logements/${id}`); // Navigation vers la page de détails du logement correspondant à l'ID
  };

  return (
    <div className="card" onClick={handleClick}> 
      <img src={cover} alt={title} /> 
      <div className="infoLocation"> 
        <p>{title}</p> 
      </div>
    </div>
  );
}

export default Card;
