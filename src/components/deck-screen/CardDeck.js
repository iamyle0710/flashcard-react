import React from 'react';
import { useDispatch } from 'react-redux';

import { selectCardDeck, updateStudyResult, setScreen} from '../../actions';
import { FLASHCARD_SCREEN } from '../../types';
import './CardDeck.css';

const CardDeck = ({deck}) => {
    
    const dispatch = useDispatch();
    const onClickDeck = () => {
        dispatch(selectCardDeck(deck));
        dispatch(setScreen(FLASHCARD_SCREEN));
    }
    return (
        <div className="choice" onClick={onClickDeck}>
            { deck.title }
        </div>
        
    )
}

export default CardDeck;