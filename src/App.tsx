import React from 'react';
import logo from './logo.svg';
import './App.css';

const name: string = "hello";
let nameChange = "hello";
nameChange = "hello John";


interface NAME {
  first: string;
  last?: string | null;
}

let nameObj: NAME = { first: "John"} 

const func1 = (x: number, y: number) => {
  return x + y;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
