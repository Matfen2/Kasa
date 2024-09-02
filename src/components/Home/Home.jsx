import React from 'react'; // Importation de la bibliothèque React
import '../Home/Home.scss'; // Importation du fichier de style SCSS pour le composant Home
import Card from "../../components/Card/Card"; // Importation du composant Card
import Banner from "../../components/Banner/Banner"; // Importation du composant Banner
import logements from '../../data/logements.json'; // Importation des données JSON contenant les informations des logements
import homeLogo from '../../assets/home.png';

function Home() {
  return (
    <div className='home'> 
      <Banner bgIMG={homeLogo} text='Chez vous, partout et ailleurs' opacity={0.8} /> {/* Affichage du composant Banner */}
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