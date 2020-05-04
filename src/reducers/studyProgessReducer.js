import { DECK_SCREEN, 
        RESULT_SCREEN, 
        GET_CARD_DECKS, 
        SELECT_DECK, 
        SET_SCREEN,
        SET_REVIEW_WORDS,
        UPDATE_STUDY_RESULT,
        UPDATE_SLIDING_STATUS, 
        } from '../types';

let initialState = {
    decks : [],
    selectDeck : null,
    selectCards : [],
    studyResult : {},
    isSliding : false,
    currentScreen : DECK_SCREEN
};

const studyProgressReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CARD_DECKS:
            return { ...state,  decks : [...action.payload]};
        case SELECT_DECK:
            return {...state, selectDeck : {...action.payload}, selectCards : [...action.payload.words] , studyResult : {}};
        case SET_SCREEN:
            return {...state, currentScreen: action.payload};
        case SET_REVIEW_WORDS:
            return {...state, selectCards : action.payload, studyResult : {}};
        case UPDATE_STUDY_RESULT:
            return  {...state, studyResult : {...action.payload}};
        case UPDATE_SLIDING_STATUS:
            return {...state, isSliding: action.payload};
        
        default:
            return state;
    }
};

export default studyProgressReducer;