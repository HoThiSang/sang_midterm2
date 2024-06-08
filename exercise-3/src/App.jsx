import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [numberA, setNumberA] = useState(0)
  const [numberB, setNumberB] = useState(0)
  const [result, setResult] = useState(0)
  const [ message, setMessage] = useState('')
  /* You will need some function to handle the key pressed and button events */
  function handleInput (e){
    console.log(typeof numberA)
    if(typeof numberA==='string' || typeof numberB ==='string'){
      setMessage('A and B shall be number !')
    }
    let b = Number(numberA)+ Number(numberB);
    console.log(typeof b)
    setResult(b)
  }

  function onA(e){
      setNumberA(e.target.value)
  }
  function onB(e){
    setNumberB(e.target.value)

  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input  type="text" onKeyUp={onA} />

      <label>B =</label>
      <input type="text"  onKeyUp={onB}  />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input style={{color:  message ? 'red' : ''}} value={ message ? message : result  } disabled />
      <button onClick={handleInput}>Compute</button>
    </main>
  );
}

export default App;
