import React from "react";
import Card from "./Card";

function CardGrid({ cards, onCardClick }) {
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <Card key={card.id} card={card} onClick={() => onCardClick(card)} />
      ))}
    </div>
  );
}

export default CardGrid;
