import React from 'react';
import Slideshow from '../components/Slideshow'; // Import the Slideshow component
import Carousel from '../components/Carousel';
import { useParams } from 'react-router-dom';
import logements from '../assets/logements.json';

import '../styles/Logements.sass';

function Logement() {
  const { id } = useParams();
  const location = logements.find((logement) => logement.id === id);

  if (!location) {
    return <p>Logement non trouvé</p>;
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i
          key={i}
          className={`fa-solid fa-star ${i < rating ? 'filled' : 'empty'}`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <div className='logement'>
      <div className='slideshow'>
        <Slideshow pictures={location.pictures} /> {/* Use Slideshow component here */}
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
            <p>{location.host.name}</p>
            <img src={location.host.picture} alt={location.host.name} />
          </div>
          <div className='rating'>
            {renderStars(location.rating)}
          </div>
        </div>
      </div>
      <div className='listDescribe'>
        <Carousel title="Description" content={<p>{location.description}</p>} />
        <Carousel title="Équipements" content={
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
