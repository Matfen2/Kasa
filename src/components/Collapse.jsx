import React, { useState } from 'react';
import '../styles/Collapse.sass';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <i className={`fa-solid fa-chevron-${isOpen ? 'down' : 'up'} icon`}></i>
      </div>
      {isOpen && <div className="content">{content}</div>}
    </div>
  );
}

export default Collapse;
