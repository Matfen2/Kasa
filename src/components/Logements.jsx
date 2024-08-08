import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../assets/logements.json';
import '../styles/Logement.sass';

function Logement() {
  const { id } = useParams();
  const location = logements.find((logement) => logement.id === id);

  if (!location) {
    return <p>Logement non trouvé</p>;
  }

  return (
    <div className='logement'>
      <div className='slideshow'>
        {location.pictures.map((picture, index) => (
          <img key={index} src={picture} alt={`Slide ${index + 1}`} />
        ))}
      </div>
      <div className='info'>
        <h1>{location.title}</h1>
        <p>{location.location}</p>
        <div className='tags'>
          {location.tags.map((tag, index) => (
            <span key={index} className='tag'>{tag}</span>
          ))}
        </div>
        <div className='host'>
          <p>{location.host.name}</p>
          <img src={location.host.picture} alt={location.host.name} />
        </div>
        <div className='rating'>
          {'★'.repeat(location.rating)}
          {'☆'.repeat(5 - location.rating)}
        </div>
        <div className='description'>
          <h2>Description</h2>
          <p>{location.description}</p>
        </div>
        <div className='equipments'>
          <h2>Équipements</h2>
          <ul>
            {location.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Logement;
