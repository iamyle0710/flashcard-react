import React from 'react';
import { useDispatch } from 'react-redux';

import { SELECT_DECK } from '../../actions/types';
import './CardDeck.css';

const CardDeck = ({deck}) => {
    
    const dispatch = useDispatch();
    
    return (
        <div className="choice" onClick={ () => dispatch({ type : SELECT_DECK, payload : deck})}>
            { deck.title }
        </div>
        
    )
}

export default CardDeck;