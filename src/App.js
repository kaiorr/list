import React, { Component } from 'react';
import ColunmList from './ColunmList';
import logo from './logo.svg';
import './App.css';

class App extends Component {

   constructor(){
     super();
     const tasks = JSON.parse(window.localStorage.getItem('toDoListTasks') || '[]');
     this.state = { tasks };
   }

  updateLocalStorage = tasks => {
    const stringified = JSON.stringify(tasks);
    window.localStorage.setItem('toDoListTasks', stringified);
  }

  updateAndSave(tasks){
    this.updateLocalStorage(tasks);
    this.setState({tasks})
  }

    addTask = (e) => {

      e.preventDefault();

      let { tasks } = this.state;
      const value = e.target.querySelector("input").value;
      const newTask = {
        id: tasks.length + 1,
        description: value,
        status: 'To Do'
      };
      tasks = tasks.concat(newTask);
      this.setState({ tasks });
      this.updateAndSave(tasks);
    }
    updateTask =  (target, task) => {
      let {tasks} = this.state;
      tasks = tasks.filter(t => t.id !== task.id).concat({
        ...task,
        stauts: target.checked ? 'Done' : 'To Do'
      });
      this.setState({ tasks });
    }
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
                addTask={this.addTask}
                updateTask={this.updateTask}
              /></h2>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
