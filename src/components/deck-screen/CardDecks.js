import React from 'react';

import './CardDecks.css';
import CardDeck from './CardDeck';

const CardDecks = ({data}) => {

    const renderList = () => {
        return (
            <div id='choices'>
                {data.map((deck, index) => <CardDeck key={index} name={deck.title}></CardDeck>)}
            </div>
        )   
    }

    return (
        <div id="card-decks">
            <header>
                <h1>FLASHCARDS</h1>
                <h2>Choose a card deck:</h2>
            </header>
            { renderList() }
        </div>
    )
};

export default CardDecks;