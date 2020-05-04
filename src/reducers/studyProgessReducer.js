import { DECK_SCREEN, RESULT_SCREEN, GET_CARD_DECKS, SELECT_DECK, UPDATE_STUDY_RESULT, UPDATE_SLIDING_STATUS, SET_SCREEN} from '../types';

let initialState = {
    decks : [],
    selectDeck : null,
    studyResult : {},
    isSliding : false,
    currentScreen : RESULT_SCREEN
};

const studyProgressReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CARD_DECKS:
            return { ...state,  decks : [...action.payload]};
        case SELECT_DECK:
            return {...state, selectDeck : {...action.payload}, studyResult : {}};
        case UPDATE_STUDY_RESULT:
            return  {...state, studyResult : {...action.payload}};
        case UPDATE_SLIDING_STATUS:
            return {...state, isSliding: action.payload};
        case SET_SCREEN:
            return {...state, currentScreen: action.payload};
        default:
            return state;
    }
};

export default studyProgressReducer;