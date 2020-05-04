import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { getCardDecks } from '../actions';
import { FLASHCARD_SCREEN, DECK_SCREEN, RESULT_SCREEN } from '../types';
import CardDecks from './deck-screen/CardDecks';
import Flashcards from './flashcard-screen/Flashcards';
import Result from './result-screen/Result';

const App = () => {
  
  const dispatch = useDispatch();
  const { selectDeck, decks, isSliding, currentScreen, studyResult} = useSelector(state => {
    console.log(state.studyProgress);
    return state.studyProgress
  });

  useEffect(() => {
    dispatch(getCardDecks());
  }, [])

  const renderScreen = () => {
    switch(currentScreen){
      case DECK_SCREEN:
        return <CardDecks data={decks}></CardDecks>
      case FLASHCARD_SCREEN:
        return <Flashcards cards={selectDeck.words}></Flashcards>
      case RESULT_SCREEN:
        return <Result result={studyResult}></Result>
    }
  }

  return (
    <div className="App" style={{backgroundColor : isSliding ? "#97b7b7" : "#d0e6df"}}>
      {renderScreen()}
    </div>  
  );
}

export default App

