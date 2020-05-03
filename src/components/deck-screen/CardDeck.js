import React from 'react';

import './CardDeck.css';

const CardDeck = ({name}) => {
    
    return (
        <div className="choice">
            { name }
        </div>
        
    )
}

export default CardDeck;