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
        <h1>Warehouse Ninja</h1>
        <button
        style={{maxWidth: '90px', maxHeight: '30px', minWidth: '90px', minHeight: '30px'}}
        onClick={() => setClickButton(true)}>Shelf 1</button>
        <br></br>
        <button style={{maxWidth: '90px', maxHeight: '30px', minWidth: '90px', minHeight: '30px'}}>Shelf 2</button>
        <br></br>
        <button style={{maxWidth: '90px', maxHeight: '30px', minWidth: '90px', minHeight: '30px'}}>Shelf 3</button>
      </header>
    </div>
  )
}