import React, { Component } from 'react';
import ColunmList from './ColunmList';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = { tasks : [] }

    addTask = () => console.log('aqui')
    updateTask =  () => console.log('aqui')
  render() {
    const { tasks = [] } = this.state;
    const columns = [
      { title: 'To Do', tasks},
      { title: 'Done', tasks}
    ];
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <div className="app-lists">
            {columns.map(column =>(
              <h2><ColunmList 
                key={column.title}
                columnTitle={column.title}
                tasks={column.tasks}
              /></h2>
            ))}
            
          
          </div>
        </div>
      </div>
    );
  }
}

export default App;
