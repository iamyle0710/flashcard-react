import { combineReducers } from 'redux';
import { DECK_SCREEN, RESULT_SCREEN, GET_CARD_DECKS, SELECT_DECK, UPDATE_STUDY_RESULT, UPDATE_SLIDING_STATUS, SET_SCREEN} from '../types';

const initialState = {
    decks : [],
    selectDeck : null,
    studyResult : {},
    isSliding : false,
    currentScreen : RESULT_SCREEN
};

const cardDecksReducer = (decks = initialState.decks, action) => {
    switch(action.type){
        case GET_CARD_DECKS:
            initialState.decks = [...action.payload];
            return initialState.decks;
        default:
            return decks;
    }
}

const selectDeckReducer = (deck = initialState.selectDeck, action) => {
    // console.log("reducer called", action);
    switch(action.type){
        case SELECT_DECK:
            initialState.selectDeck = {...action.payload};
            return initialState.selectDeck;
        default:
            return deck;
    }
}

const studyResultReducer = (studyResult = initialState.studyResult, action) => {
    // console.log("studyResultReducer", initialState.studyResult, action);
    switch(action.type){
        case UPDATE_STUDY_RESULT:
            initialState.studyResult = {...initialState.studyResult, ...action.payload};
            return initialState.studyResult;
        default:
            return studyResult;
    }
}

const slidingStatusReducer = (status = initialState.isSliding, action) => {
    switch(action.type){
        case UPDATE_SLIDING_STATUS:
            initialState.isSliding = action.payload;
            return initialState.isSliding;
        default:
            return status;
    }
}

const setCurrentScreenReducer = (screen = initialState.currentScreen, action) => {
    switch(action.type){
        case SET_SCREEN:
            return action.payload;
        default:
            return screen;
    }
}

export default combineReducers({
    decks : cardDecksReducer,
    selectDeck : selectDeckReducer,
    studyResult : studyResultReducer,
    isSliding : slidingStatusReducer,
    currentScreen : setCurrentScreenReducer
});