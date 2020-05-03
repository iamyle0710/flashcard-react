
import { FLASHCARD_DECKS } from '../data';
import { GET_CARD_DECKS, SELECT_DECK } from './types';

export const getCardDecks = () => {
    return {
        type : GET_CARD_DECKS,
        payload : FLASHCARD_DECKS
    }
}

export const selectCardDeck = (deck) => {
    return {
        type : SELECT_DECK,
        payload : deck
    }
}