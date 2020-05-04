import React, { useState, useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Flashcards.css';
import { updateStudyResult, updateSlidingStatus } from '../../actions';
import Flashcard from './Flashcard';

function Flashcards({cards}){

    const dispatch = useDispatch();
    const [index, setIndex] = useState(0);
    const studyResult = useSelector(state => state.studyResult);
    const slidingCallback = useCallback((word, result, isFinalAnswer) => {
        let wordResult = {};
        wordResult[word] = result
        dispatch(updateStudyResult(wordResult));
        dispatch(updateSlidingStatus(result !== 0));

        if(isFinalAnswer){
            setIndex(index+1);
            dispatch(updateSlidingStatus(false));
        }
    }, [index]);

    const getTotal = (result) => {
        let count = 0;
        Object.keys(studyResult).forEach(word => {
            count = studyResult[word] === result ? count + 1 : count;
        });
        return count;
    }

    if(index >= cards.length){
        return null;
    }
    else{
        return (
            <div id="flashcards">
                <div className="card">
                    <Flashcard card={cards[index]} slidingCallback={slidingCallback}></Flashcard>
                </div>
                <div className="status">
                    <div>
                        <span className="correct">{getTotal(1)}</span> right
                    </div>
                    <div>
                        <span className="incorrect">{getTotal(-1)}</span> wrong
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Flashcards;