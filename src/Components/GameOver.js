import React,{useContext} from 'react'
import { AppContext } from '../App'
function GameOver() {
    const {gameOver,setGameOver,correctWord,currAttempt}=  useContext(AppContext);
    
  return (
    <div className='gameOver'>
        <h3>{gameOver.guessedWord ? "WOW!!...Correct Word":"Failed to guess the correct word...try again??"}</h3>
       <h1>Correct Word: {correctWord}</h1>
       {gameOver.guessedWord && (<h3>you guessed correctly in {currAttempt.attempt} attempts</h3>)}
       
    </div>
  )
}

export default GameOver
