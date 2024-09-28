// App.js
import React, { useState, useEffect } from "react";
import CardGrid from "./components/CardGrid";
import Modal from "./components/Modal";
import "./styles.css";

function App() {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=20"
      );
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setCards(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="app">
      <h1>Dynamic Card Grid</h1>
      <CardGrid cards={cards} onCardClick={handleCardClick} />
      {selectedCard && <Modal card={selectedCard} onClose={closeModal} />}
    </div>
  );
}

export default App;
