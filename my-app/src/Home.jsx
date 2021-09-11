import React from 'react';
import logo from './logo.svg';
import Spatial from './Spatial.jsx';
import './App.css';
import {
  Redirect
} from 'react-router-dom';

export default function Home() {
  const [clickButton, setClickButton] = React.useState(false);

  if (clickButton) {
    return <Redirect to="/spatial" />
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inventory Stock</h1>
        <button onClick={() => setClickButton(true)}>Start</button>
      </header>
    </div>
  )
}