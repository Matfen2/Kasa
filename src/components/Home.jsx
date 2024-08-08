import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.sass';
import homeLogo from '../assets/home.png';
import logements from '../assets/logements.json';

function Home() {
  const navigate = useNavigate(); // useNavigate renvoie directement une fonction

  const showLocation = (id) => {
    navigate(`/logements/${id}`); // Utiliser navigate directement pour la navigation
  };

  const listLocation = logements.map((location) => (
    <div className='card' onClick={() => showLocation(location.id)} key={location.id}>
      <img src={location.cover} alt={location.title} />
      <div className='infoLocation'>
        <p>{location.title}</p>
      </div>
    </div>
  ));

  return (
    <div className='home'>
      <div className='welcome'>
        <img src={homeLogo} alt='homeLogo' />
        <span className='centered-text'>Chez vous, partout et ailleurs</span>
      </div>
      <div className='location'>
        <div className='listHome'>
          {listLocation}
        </div>
      </div>
    </div>
  );
}

export default Home;
