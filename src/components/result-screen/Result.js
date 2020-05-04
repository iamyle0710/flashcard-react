import React from 'react';
import { useDispatch } from 'react-redux';

import './Result.css';
import { DECK_SCREEN, FLASHCARD_SCREEN } from '../../types';
import { setScreen, setReviewWords } from '../../actions';

function Result({result, cards}){

    const dispatch = useDispatch();
    let correct = 0;
    let incorrect = 0;
    
    Object.keys(result).forEach(word => {
        correct = result[word] === 1 ? correct + 1 : correct;
        incorrect = result[word] === -1 ? incorrect + 1 : incorrect;
    });

    const percentage = (correct + incorrect !== 0) ? (correct / (correct + incorrect) * 100) : 0;

    const onClickToMenu = () => {
        dispatch(setScreen(DECK_SCREEN));
    }

    const onClickReviewWords = () => {
        let reviewCards = [];

        if(percentage === 100){
            // restart from beginning
            reviewCards = cards;
        }
        else{
            // review incorrect words
            cards.forEach(card => {
                if(result[card.front] === -1){
                    reviewCards.push(card);
                }
            });
        };
        
        dispatch(setReviewWords(reviewCards));
        dispatch(setScreen(FLASHCARD_SCREEN));
        
    }

    return (
        <div id="results">
            <h1>Results</h1>
            <div><span className="percent">{percentage.toFixed(2)}</span>%</div>
            <div><span className="correct">{correct}</span> right</div>
            <div><span className="incorrect">{incorrect}</span> wrong</div>
            <div className="menu-buttons">
                <button className="continue" onClick={onClickReviewWords}>{percentage === 100 ? "Start over?" : "Continue"}</button>
                <button className="to-menu" onClick={onClickToMenu}>Back to menu</button>
            </div>
        </div>
    )
}


export default Result;