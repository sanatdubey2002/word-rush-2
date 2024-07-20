import React,{useContext, useEffect, useState} from 'react'
import { AppContext } from '../App';
import {logic} from './Logics';
function Letter({letterPos, attemptVal}) {
    const {board, correctWord, currAttempt,setDisabledLetter}= useContext(AppContext);
    const [letterState,setLetterState]=useState("");
    const letter= board[attemptVal][letterPos];
  
    useEffect(()=>{
    if(currAttempt.attempt == attemptVal+1){
      let val=logic(correctWord,board[attemptVal]);
      if(val[letterPos] == 0){
        setLetterState("error");
        setDisabledLetter((prev)=>[...prev, letter]);
      }
      else if(val[letterPos] == 1){
       setLetterState("correct");
      }
      else{
       setLetterState("almost");
      }
    }
  },[currAttempt.attempt])
   
  return (
    <div className="letter" id={letterState}>
     {letter}
    </div>
  )
}

export default Letter
