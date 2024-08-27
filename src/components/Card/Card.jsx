import React from 'react';
import '../Card/Card.scss';
import { useNavigate } from 'react-router-dom';

function Card({ id, title, cover }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/logements/${id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={cover} alt={title} />
      <div className="infoLocation">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Card;
