import { combineReducers } from 'redux';
import { GET_CARD_DECKS, SELECT_DECK } from '../actions/types';

const initialState = {
    decks : [],
    selectDeck : null,
    studyComplete : false,
    studyResult : {}
};

const cardDecksReducer = (decks = initialState.decks, action) => {
    switch(action.type){
        case GET_CARD_DECKS:
            initialState.decks = action.payload;
            return initialState.decks;
        default:
            return decks;
    }
}

const selectDeckReducer = (deck = initialState.selectDeck, action) => {
    switch(action.type){
        case SELECT_DECK:
            return {...action.payload};
        default:
            return deck;
    }
}

export default combineReducers({
    decks : cardDecksReducer,
    selectDeck : selectDeckReducer
});