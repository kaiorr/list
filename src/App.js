import React, { Component } from 'react';
import ColunmList from './ColunmList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  addTask = () => console.log('aqui')
  updateTask =  () => console.log('aqui')
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <div>
          <div className="app-lists">
            <h2><ColunmList /></h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
