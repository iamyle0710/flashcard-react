import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { getCardDecks } from '../actions';
import CardDecks from './deck-screen/CardDecks';

const App = () => {
  
  const dispatch = useDispatch();
  const decks = useSelector(state => {
    console.log(state);
    return state.decks
  });

  useEffect(() => {
    dispatch(getCardDecks());
  }, [decks])

  return (
    <div className="App">
      <CardDecks data={decks}></CardDecks>
    </div>
  );
  
}

export default App;

