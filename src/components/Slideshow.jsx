import React, { useState } from 'react';
import logements from '../assets/logements.json';
import '../styles/Slideshow.sass';

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const locationsPerPage = 6;

  const totalSlides = Math.ceil(logements.length / locationsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const startIndex = currentSlide * locationsPerPage;
  const endIndex = startIndex + locationsPerPage;
  const currentLocations = logements.slice(startIndex, endIndex);

  return (
    <div className="slideshow">
      <div className="slides">
        {currentLocations.map((location) => (
          <div className="card" key={location.id}>
            <img src={location.cover} alt={location.title} />
            <div className="infoLocation">
              <p>{location.title}</p>
            </div>
          </div>
        ))}
      </div>
      {totalSlides > 1 && (
        <>
          <button className="prev" onClick={prevSlide}>&#10094;</button>
          <button className="next" onClick={nextSlide}>&#10095;</button>
          <div className="slide-number">
            {currentSlide + 1} / {totalSlides}
          </div>
        </>
      )}
    </div>
  );
}

export default Slideshow;
