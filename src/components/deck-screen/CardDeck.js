import React from 'react';
import { useDispatch } from 'react-redux';

import { selectCardDeck } from '../../actions';
import './CardDeck.css';

const CardDeck = ({deck}) => {
    
    const dispatch = useDispatch();
    
    return (
        <div className="choice" onClick={ () => dispatch(selectCardDeck(deck))}>
            { deck.title }
        </div>
        
    )
}

export default CardDeck;