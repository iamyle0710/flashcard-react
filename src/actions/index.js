
import { FLASHCARD_DECKS } from '../data';
import { GET_CARD_DECKS, 
        SELECT_DECK, 
        SET_REVIEW_WORDS,
        UPDATE_STUDY_RESULT, 
        UPDATE_SLIDING_STATUS, 
        SET_SCREEN 
} from '../types';

export const getCardDecks = () => {
    // console.log("getCardDecks called");
    const decks = FLASHCARD_DECKS.map(deck => {
        console.log(Object.keys(deck.words));
        let words = Object.keys(deck.words).map(front => {
            return { "front" : front, "back" : deck.words[front]};
        });
        deck.words = words;
        console.log(deck);
        return deck;
    })
    return {
        type : GET_CARD_DECKS,
        payload : decks
    }
}

export const setScreen = (screen) => {
    return {
        type : SET_SCREEN,
        payload : screen
    }
}

export const selectCardDeck = (deck) => {
    // console.log("actioned called : ", deck)
    return {
        type : SELECT_DECK,
        payload : deck
    }
}

export const setReviewWords = (words) => {
    return {
        type : SET_REVIEW_WORDS,
        payload : words
    }
}

export const updateStudyResult = (wordResult) => {
    // console.log("updateStudyResult action : ", wordResult);
    return {
        type: UPDATE_STUDY_RESULT,
        payload : wordResult
        
    }
}

export const updateSlidingStatus = (status) => {
    // console.log("updateSlidingStatus action : ", status);
    return {
        type : UPDATE_SLIDING_STATUS,
        payload : status
    }
}


