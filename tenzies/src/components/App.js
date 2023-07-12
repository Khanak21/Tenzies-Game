import { useState,useEffect } from 'react';
import './App.css';
import Die from "./die"
import Confetti from "react-confetti"

export default function App() {
  const [num,setNum] = useState(allNewDice())
  const [tenzies,setTenzies] = useState(false);

  function allNewDice(){
    let newArr=[]
    for(let i=1;i<=10;i++){
      let x=Math.ceil(Math.random()*6)
      newArr.push({value:x,isHeld:false,id:i});
    }
    return newArr
  }


  useEffect(()=>{
    //All dice should be held and equal
    const allheld=num.every(die=>die.isHeld === true)
    const alleq=num.every(die=>die.value === num[0].value)
    if(allheld && alleq){
      setTenzies(true) 
    console.log("yay")}
  },[num])

    function rollDice() {
      setNum(oldNum => oldNum.map(die=>{
          return  die.isHeld === false ? 
          {   ...die,
              value: Math.ceil(Math.random() * 6),
              } :die
      }))
  }
 
//v.imp
  function holdDice(id){
    setNum(oldNum=>oldNum.map(n=>{
      return n.id===id ? {...n,isHeld:!n.isHeld} : n
    }))

  }

  let newArr = num.map(number=>{
    return <Die value={number.value} isHeld={number.isHeld} id={number.id} holdDice={()=>holdDice(number.id)} />
})
 
  
  return (
    
      <main>
         {tenzies && <Confetti/>}
        <h1 className="title">Tenzies</h1>
            <p className="instructions">{tenzies ? "Breaking news: Tenzies game declares you the undisputed ruler of awesomeness! 🎉 Wanna play again?" : "Roll until all dice are the same. Click each die to freeze it at its current value between rolls."}</p>
          <div className="dice-container">
              {newArr}
          </div>
          <button className="roll-dice" onClick={tenzies ? ()=>{setNum(allNewDice());setTenzies(false)} : rollDice}>{tenzies ? "Play Again" : "Roll"}</button>
      </main>
  )
}
