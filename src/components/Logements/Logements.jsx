import React, { useEffect } from 'react'; // Importation de React et du hook useEffect
import Slideshow from "../../components/Slideshow/Slideshow"; // Importation du composant Slideshow
import Collapse from "../../components/Collapse/Collapse"; // Importation du composant Collapse
import { useParams, useNavigate } from 'react-router-dom'; // Importation des hooks pour les paramètres de route et la navigation
import logements from '../../data/logements.json'; // Importation des données JSON des logements

import '../Logements/Logements.scss'; // Importation des styles SCSS pour le composant Logements
import '../Collapse/Collapse.scss'; // Importation des styles SCSS pour le composant Collapse

function Logement() {
  const { id } = useParams(); // Récupération de l'ID du logement depuis l'URL
  const navigate = useNavigate(); // Hook pour la navigation
  const location = logements.find((logement) => logement.id === id); // Recherche du logement correspondant à l'ID

  useEffect(() => {
    if (!location) {
      navigate('/404'); // Redirection vers la page 404 si le logement n'existe pas
    }
  }, [location, navigate]); // Dépendances du useEffect

  if (!location) {
    return null; // Retourne null si le logement n'est pas trouvé
  }

  const renderStars = (rating) => { // Fonction pour afficher les étoiles de notation
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i
          key={i}
          className={`fa-solid fa-star ${i < rating ? 'filled' : 'empty'}`} // Ajout de la classe 'filled' ou 'empty' selon la note
        ></i>
      );
    }
    return stars; // Retourne le tableau d'étoiles
  };

  return (
    <div className='logement'> 
      <div className='slideshow'> 
        <Slideshow pictures={location.pictures} />
      </div>
      <div className='listInfo'> 
        <div className='info'> 
          <p className='title'>{location.title}</p> 
          <p className='country'>{location.location}</p> 
          <div className='tags'> 
            {location.tags.map((tag, index) => (
              <span key={index} className='tag'>{tag}</span> 
            ))}
          </div>
        </div>
        <div className='host'> 
          <div className='identity'> 
            <p className='name'>{location.host.name}</p> 
            <img src={location.host.picture} alt={location.host.name} className='people' /> 
          </div>
          <div className='rating'> 
            {renderStars(location.rating)} 
          </div>
        </div>
      </div>
      <div className='listDescribe'> 
        <Collapse title="Description" content={<p>{location.description}</p>} /> 
        <Collapse title="Équipements" content={
          <ul>
            {location.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li> 
            ))}
          </ul>
        } />
      </div>
    </div>
  );
}

export default Logement; 