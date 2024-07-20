
import './App.css';
import Board from './Components/Board';
import Keyboard from './Components/Keyboard';
import { createContext, useEffect, useState } from 'react';
import { boardDefault, generateWordSet } from './Components/Words';
import GameOver from './Components/GameOver';
import Header from './Components/Header';
import { Meaning } from './Components/Meaning';
import { Link } from 'react-router-dom';
export const AppContext=createContext();
function App() {
  const [board,setBoard]=useState(boardDefault);
  const [currAttempt,setCurrAttempt]=useState({attempt:0 , letterPos:0});
   const [wordSet,setWordSet]= useState(new Set());
   const [disabledLetters, setDisabledLetter] = useState([]);
   const [gameOver,setGameOver]=useState({gameOver: false, guessedWord:  false});
 const [reload, setReload] = useState(false);
const [correctWord,setCorrectWord] = useState("");
const [definition,setDefinition]=useState("");
const [disp,setDisp] = useState(false);
const [hinted,setHinted]= useState(false);
const [loading,setLoading]= useState(false)
  useEffect(()=>{
    generateWordSet().then((words)=>{
     
      setWordSet(words.wordSet);
      setCorrectWord(words.todayWord.toUpperCase()); 
      
      setHinted(false);
    })
  },[reload]);


const onSelectLetter=(keyVal)=>{
    if(currAttempt.letterPos>4){
      return;
  }
 const newBoard=[...board];
 newBoard[currAttempt.attempt][currAttempt.letterPos]=keyVal;
 setBoard(newBoard);
 setCurrAttempt({...currAttempt,letterPos:currAttempt.letterPos+1});
  }
 
  const onDelete=()=>{
    if(currAttempt.letterPos==0)return;
           const newBoard=[...board];
       newBoard[currAttempt.attempt][currAttempt.letterPos-1]="";
       setBoard(newBoard);
       setCurrAttempt({...currAttempt,letterPos:currAttempt.letterPos-1});
  }

 const onEnter=()=>{
  if(currAttempt.letterPos!=5)return;
  let currWord = "";
  for(let i=0;i<5;i++){
    currWord+=board[currAttempt.attempt][i];
  }
  
  
  if(wordSet.has(currWord.toLowerCase())){
    setCurrAttempt({letterPos:0,attempt:currAttempt.attempt+1});
  }else{
    alert('word not found!!')
    return;
  }
  
  if(currWord.trim() == correctWord.trim()){
    setGameOver({gameOver:true,guessedWord:true});
    if(!hinted){
    let val=localStorage.getItem("streak");
    val++;
    localStorage.setItem("streak",val);
    if(val>localStorage.getItem("best")){
      localStorage.setItem("best",val);
    }}
    return;
  }
  if(currAttempt.attempt===5){
    setGameOver({gameOver: true, guessedWord : false})
    localStorage.setItem("streak",0);
  }
  }

  const handleHint=async ()=>{
    setLoading(true)
    setDisp(false);
    let def= await Meaning(correctWord);
    setDefinition(def);
    setHinted(true)
    setDisp(true);
    setLoading(false);
  }

  return (
    
    
    <div className="App">
      <Header onClick={handleHint}/>
      <AppContext.Provider 
      value={{
        board,
        setBoard,
        currAttempt,
        setCurrAttempt,
        onSelectLetter,
        onEnter,
        onDelete,
        correctWord,
        disabledLetters, 
        setDisabledLetter,
        gameOver,
        setGameOver
       
        }}>
          {loading? (<div>Loading...</div>):(disp ? (<div><div className='red'>Note: This will not be included in your current streak even if you get it right</div><br/>Definition: {definition}<span> <button className='btn' onClick={()=>{setDisp(false)}}>Hide</button></span></div>):(<></>))}
          
        <div className="game">
        <Board/>
        {gameOver.gameOver? (<GameOver/>):(<Keyboard/>)}
        
        {gameOver.gameOver ? (<button 
       className='btn' onClick={()=> window.location.reload(false)}>play again!!</button>):(<></>)}
      
      </div>
        
      </AppContext.Provider>
      
    </div>
    
  );
}

export default App;
