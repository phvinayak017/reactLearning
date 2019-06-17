import React from 'react';
import logo from './logo.svg';
import './App.css';
import GenerateUsers from './component/faker1'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GenerateUsers />
      </header>
    </div>
  );
}

export default App;
