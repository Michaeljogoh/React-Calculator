import { useState } from 'react'
import React from 'react'
import '../Appi.css'
const  Appi = () => {
    const [result , setResult] = useState("");

    const handleclick = (e) => {
        setResult(result.concat(e.target.name));
    }

    const clear = () =>{
        setResult('');
    }
    const backspace = () => {
        setResult(result.slice (0 , -1))
    }
    const Result = ()=>{
        setResult(eval(result).toString());
    }

  return (
    <div class="container">
        <input id='display' type='text' value={result}/>

    <div class="buttons">
        <button name= 'c'    onClick={clear}>C</button>
        <button name = '/' onClick={handleclick}>/</button>
        <button name = '*' onClick={handleclick}>*</button>
        <button name = 'K'  onClick={backspace}>K</button>
        <button name = '7' onClick={handleclick}>7</button>
        <button name = '8' onClick={handleclick}>8</button>
        <button name = '9' onClick={handleclick}>9</button>
        <button name = '-' onClick={handleclick}>-</button>
        <button name = '4' onClick={handleclick}>4</button>
        <button name = '5' onClick={handleclick}>5</button>
        <button name = '6' onClick={handleclick}>6</button>
        <button name = '+' onClick={handleclick}>+</button>
        <button name = '1' onClick={handleclick}>1</button>
        <button name = '2' onClick={handleclick}>2</button>   
        <button name = '3' onClick={handleclick}>3</button>
        <button name = '.' onClick={handleclick}>.</button>
        <button name = '(' onClick={handleclick}>(</button>
        <button name = '0' onClick={handleclick}>0</button>
        <button name = ')' onClick={handleclick}>)</button>
        <button name = '=' id = 'equal' onClick={Result}>=</button>
   </div>
</div>
  )
}

export default Appi