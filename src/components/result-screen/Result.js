import React from 'react';
import { useDispatch } from 'react-redux';

import './Result.css';
import { DECK_SCREEN } from '../../types';
import { setScreen } from '../../actions';

function Result({result}){

    const dispatch = useDispatch();
    let correct = 0;
    let incorrect = 0;
    
    Object.keys(result).forEach(word => {
        correct = result[word] === 1 ? correct + 1 : correct;
        incorrect = result[word] === -1 ? incorrect + 1 : incorrect;
    });

    const percentage = (correct + incorrect !== 0) ? (correct / (correct + incorrect) * 100).toFixed(2) : 0;

    const onClickToMenu = () => {
        dispatch(setScreen(DECK_SCREEN));
    }

    return (
        <div id="results">
            <h1>Results</h1>
            <div><span className="percent">{percentage}</span>%</div>
            <div><span className="correct">{correct}</span> right</div>
            <div><span className="incorrect">{incorrect}</span> wrong</div>
            <div className="menu-buttons">
                <button className="continue">Start over?</button>
                <button className="to-menu" onClick={onClickToMenu}>Back to menu</button>
            </div>
        </div>
    )
}


export default Result;