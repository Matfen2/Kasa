import React, {useEffect} from 'react';
import Slideshow from "../../components/Slideshow/Slideshow"; 
import Collapse from "../../components/Collapse/Collapse";
import { useParams, useNavigate } from 'react-router-dom';
import logements from '../../data/logements.json';

import '../Logements/Logements.scss';
import '../Collapse/Collapse.scss'; 

function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = logements.find((logement) => logement.id === id);

  useEffect(() => {
    if (!location) {
      navigate('/404');
    }
  }, [location, navigate]);

  if (!location) {
    return null; 
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
