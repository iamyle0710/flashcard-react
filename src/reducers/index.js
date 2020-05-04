import { combineReducers } from 'redux';
import studyProgressReducer from './studyProgessReducer';


export default combineReducers({
    studyProgress : studyProgressReducer
});