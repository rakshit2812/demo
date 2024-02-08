import React, { useState } from 'react'
import Display from './components/Display'
import ButtonContainer from './components/ButtonContain'
import './App.css'

export default function App() {
  const[Text , setText] = useState("");

  const buttonItems = ['AC', 'DE', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']
  const handleEvent = (event)=>{
    if(event.target.innerText === '='){
      const result = eval(Text);
      setText(result);
    }
    else if(event.target.innerText === 'AC'){
      setText("");
    }
    else if(event.target.innerText === 'DE'){
      setText(Text.slice(0,-1));
    }
    else{
      const ans = Text + event.target.innerText;
      setText(ans);
    } 
  }
  return (
    <>
      <div className="calculator">
        <h1> my calculator</h1>
        <div className="parent">
          <Display value = {Text}/>
          <ButtonContainer buttons = {buttonItems} HandleOnClick = {handleEvent}/>
        </div>       
      </div>
    </>
  )
}
