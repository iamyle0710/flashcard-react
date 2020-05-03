import React from 'react';

import './App.css';
import CardDecks from './deck-screen/CardDecks';
import { FLASHCARD_DECKS } from '../data';

function App() {
  return (
    <div className="App">
      <CardDecks data={FLASHCARD_DECKS}></CardDecks>
    </div>
  );
}

export default App;
