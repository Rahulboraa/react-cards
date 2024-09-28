import React from "react";

function Modal({ card, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={card.url} alt={card.title} />
        <h2>{card.title}</h2>
        <p>Card ID: {card.id}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
