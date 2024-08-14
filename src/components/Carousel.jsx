import React, { useState } from 'react';
import '../styles/Carousel.sass';

function Carousel({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="carousel">
      <div onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <i className={`fa-solid fa-chevron-${isOpen ? 'down' : 'up'} icon`}></i>
      </div>
      {isOpen && <div className="content">{content}</div>}
    </div>
  );
}

export default Carousel;