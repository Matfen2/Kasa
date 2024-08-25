import React from 'react';
import '../styles/Home.sass';
import Card from './Card';
import Banner from './Banner';
import logements from '../assets/logements.json';

function Home() {
  return (
    <div className='home'>
      <Banner />
      <div className='listLocation'>
        <div className="listHome">
          {logements.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
