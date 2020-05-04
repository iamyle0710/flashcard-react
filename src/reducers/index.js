import { combineReducers } from 'redux';
import { GET_CARD_DECKS, SELECT_DECK, UPDATE_STUDY_RESULT, UPDATE_SLIDING_STATUS} from '../actions/types';

const initialState = {
    decks : [],
    selectDeck : null,
    studyComplete : false,
    studyResult : {},
    isSliding : false
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

export default combineReducers({
    decks : cardDecksReducer,
    selectDeck : selectDeckReducer,
    studyResult : studyResultReducer,
    isSliding : slidingStatusReducer
});