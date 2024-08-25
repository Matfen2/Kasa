import React, { useState, useRef, useEffect } from 'react';
import '../styles/Collapse.sass';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
      contentRef.current.style.padding = '15px 20px';
    } else {
      contentRef.current.style.height = '0';
      contentRef.current.style.padding = '0 20px';
    }
  }, [isOpen]);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <i className={`chevron-icon fa-solid fa-chevron-up ${isOpen ? 'open' : ''}`}></i>
      </div>
      <div className="collapse-content" ref={contentRef}>
        {content}
      </div>
    </div>
  );
}

export default Collapse;
