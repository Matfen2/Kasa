import React from 'react';
import logements from '../assets/logements.json';
import '../styles/Home.sass';
import Card from './Card';
import Banner from './Banner';

function Home() {
  const logementsToShow = logements.slice(0, 6); // Affichez les 6 premiers logements

  return (
    <div className="home">
      <Banner />
      <div className='location'>
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
