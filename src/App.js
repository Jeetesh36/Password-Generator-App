// src/App.js
import React, { useState } from 'react';
import './App.css';
import { UC } from './PasswordGenerator';
import { LC } from './PasswordGenerator';
import { NC } from './PasswordGenerator';
import { SC } from './PasswordGenerator';

const App = () => {
  let [uppercase, setupparcase] = useState(false)
  let [lowercase, setlowerrcase] = useState(false)
  let [number, setnumber] = useState(false)
  let [symbols, setsymboyls] = useState(false)
  let [passwordlength, setpasswordlength] = useState(10)
  let [fpass, setfpass]=useState()

 
  let createPassword = () => {
    let finalPassword=''
    let charSet = ''
    if (uppercase || lowercase || number || symbols) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (number) charSet += NC;
      if (symbols) charSet += SC;
      for(let i=0; i<passwordlength; i++){
        finalPassword+=charSet.charAt(Math.floor(Math.random()*charSet.length))
      }
      setfpass(finalPassword)
    }
    else {
      alert("Please select at least one Checkbox")
    }
  }
  let copyPass=()=>{
    navigator.clipboard.writeText(fpass)
  }
  return (
    <div className="App">
      <div className='passwordBox'>
        <h2>Password Generator</h2>
        <div className='passwordBoxin'>
          <input type='text' readOnly value={fpass} /> <button onClick={copyPass}>Copy</button>
        </div>

        <div className='passlength'>
          <label>Password length</label>
          <input type='number' max={20} min={10} value={passwordlength} onChange={(event) => setpasswordlength(event.target.value)} />
        </div>

        <div className='passlength'>
          <label>Include Uppercase letters</label>
          <input type='checkbox' checked={uppercase} onChange={() => setupparcase(!uppercase)} />
        </div>

        <div className='passlength'>
          <label>Include Lowercase letters</label>
          <input type='checkbox' checked={lowercase} onChange={() => setlowerrcase(!lowercase)} />
        </div>

        <div className='passlength'>
          <label>Include Numbers</label>
          <input type='checkbox' checked={number} onChange={() => setnumber(!number)} />
        </div>

        <div className='passlength'>
          <label>Include Symbols</label>
          <input type='checkbox' checked={symbols} onChange={() => setsymboyls(!symbols)} />
        </div>

        <button className='btn' onClick={createPassword}>Generate Password</button>
      </div>
    </div>
  );
};

export default App;
