import React from 'react';
import Banner from '../components/Banner2';  
import Collapse from '../components/Collapse';
import '../styles/About.sass';

function About() {
  return (
    <div className="about">
      <div className="freedom">
        <Banner />
      </div>
      <div className="listAbout">
        <Collapse title="Fiabilité" content="Contenu pour la section Fiabilité" />
        <Collapse title="Respect" content="Contenu pour la section Respect" />
        <Collapse title="Service" content="Contenu pour la section Service" />
        <Collapse title="Sécurité" content="Contenu pour la section Sécurité" />
      </div>
    </div>
  );
}

export default About;
