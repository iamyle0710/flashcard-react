import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { getCardDecks } from '../actions';
import CardDecks from './deck-screen/CardDecks';
import Flashcards from './flashcard-screen/Flashcards';

const App = () => {
  
  const dispatch = useDispatch();
  const { selectDeck, decks, isSliding, studyComplete} = useSelector(state => state);

  useEffect(() => {
    dispatch(getCardDecks());
  }, [])

  const renderScreen = () => {
    if(selectDeck){
      return <Flashcards cards={selectDeck.words}></Flashcards>
    }
    else if(studyComplete){
      
    }
    else{
      return <CardDecks data={decks}></CardDecks>
    }
  }

  return (
    <div className="App" style={{backgroundColor : isSliding ? "#97b7b7" : "#d0e6df"}}>
      {renderScreen()}
    </div>  
  );
}

export default App

