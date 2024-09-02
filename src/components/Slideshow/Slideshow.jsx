import React, { useState } from 'react'; // Importation de React et du hook useState
import '../Slideshow/Slideshow.scss'; // Importation des styles SCSS pour le composant Slideshow

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0); // Initialisation de l'index de l'image courante

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1 // Passage à la prochaine image ou retour au début si c'est la dernière
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1 // Retour à l'image précédente ou à la dernière si c'est la première
    );
  };

  return (
    <div className='slideshow'>
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className='slide-image'/> 
      
      {pictures.length > 1 && (
        <>
          <i className="fa-solid fa-chevron-left left-arrow" onClick={prevSlide}></i>
          <i className="fa-solid fa-chevron-right right-arrow" onClick={nextSlide}></i>
          <p className='slide-index'>{`${currentIndex + 1}/${pictures.length}`}</p> 
        </>
      )}
    </div>
  );
}

export default Slideshow; 
