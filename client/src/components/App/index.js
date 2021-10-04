// == Import
import React, { useState } from 'react';
import reactLogo from './react-logo.svg';
import './styles.css';

// == Composant
const App = () => { 

  const [msg, setMsg] = useState('');

  const handleClick = async () => {
    const data = await fetch('http://localhost:3000/api');
    const json = await data.json();
    const msg = json.title

    setMsg(msg)
    console.log(msg);
  }

  return (
    <div className="app">
      <img src={reactLogo} alt="react logo" />
      <button onClick={handleClick}>Dire bonjour à l'API</button>
      <p>{msg}</p>
    </div>
  );
}


// == Export
export default App;