import React, { useState } from 'react';
import '../styles/Slideshow.sass';

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='slideshow'>
      {pictures.length > 1 && (
        <i className="fa-solid fa-chevron-left left-arrow" onClick={prevSlide}></i>
      )}
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className='slide-image'/>
      <p className='slide-index'>{`${currentIndex + 1}/${pictures.length}`}</p>
      {pictures.length > 1 && (
        <i className="fa-solid fa-chevron-right right-arrow" onClick={nextSlide}></i>
      )}
    </div>
  );
}

export default Slideshow;
