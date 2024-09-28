import React, { useState } from "react";

function Card({ card, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <img src={card.thumbnailUrl} alt={card.title} />
      <h3>{card.title}</h3>
      <button className="read-more">Read More</button>
    </div>
  );
}

export default Card;
