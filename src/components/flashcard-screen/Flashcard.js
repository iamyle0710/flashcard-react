import React, {useState, useRef} from 'react';

import './Flashcard.css';

function Flashcard({card, slidingCallback}){

    const cardRef = useRef();
    const {front, back } = card;
    const [isShowWord, setIsShowWord] = useState(true);
    let isDragging = false;
    let isMoving = false;
    let originX = null;
    let originY = null;
    let deltaX = null;
    let deltaY = null;
    let degree = null;


    const onDown = event => {
        isDragging = true;
        event.target.setPointerCapture(event.pointerId);
        originX = event.clientX;
        originY = event.clientY;
        cardRef.current.classList.remove("bounce");
    }

    const onMove = event => {
        
        if(!isDragging){
            return;
        }
        isMoving = true;
        deltaX = event.clientX - originX;
        deltaY = event.clientY - originY;
        degree = 0.2 * deltaX;
        cardRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${degree}deg)`;
        
        if(deltaX < -150){
            slidingCallback(front, -1 , false);
        }
        else if (deltaX > 150){
            slidingCallback(front, 1, false);
        }
        else{
            slidingCallback(front, 0 , false);
        }
    }

    const onUp = event => {
        if(isDragging && isMoving){
            isDragging = false;
            isMoving = false;
            
            if(deltaX < -150){
                slidingCallback(front, -1 , true);
            }
            else if (deltaX > 150){
                slidingCallback(front, 1 , true);
            }
            else{
                cardRef.current.classList.add("bounce")
                slidingCallback(front, 0 , false);
            }
    
            cardRef.current.classList.remove("bounce");
            cardRef.current.style.transform = null;
        }
        else{
            setIsShowWord(!isShowWord);
        }
    }
    return (
        <div ref={cardRef} 
            id="flashcard-box" 
            className={isShowWord ? "show-word" : null}
            onPointerDown={onDown}  
            onPointerMove={onMove}
            onPointerUp={onUp}>
            <div className="flashcard word">{front}</div>
            <div className="flashcard definition">{back}</div>
        </div>
    )
}

export default React.memo(Flashcard);

