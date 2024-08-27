import React from 'react';
import '../Home/Home.scss';
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";
import logements from '../../data/logements.json';

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
