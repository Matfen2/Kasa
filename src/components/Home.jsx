import React from 'react';
import '../styles/Home.sass';
import Card from './Card';
import Banner from './Banner';
import logements from '../assets/logements.json';

function Home() {
  const logementsToShow = logements.slice(0, 6);

  return (
    <div className='home'>
      <Banner />
      <div className='listLocation'>
        <div className="listHome">
          {logementsToShow.map((logement) => (
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
