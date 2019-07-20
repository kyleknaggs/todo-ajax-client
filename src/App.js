import React, { Component } from 'react';
import Todo from './components/Todo';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 0,
          text: "Loading..."
        }
      ]
    };

  }

  componentDidMount(){
    // Make updateTodo accessible inside of onloadc
    const app = this;

    // Create a new request:
    var xhr = new XMLHttpRequest();

    // Callback to be fired after the request is successfull
    xhr.onload = function () {
      if (this.status === 200) {
        // Convert JSON returned by the server into JavaScript:
        const newTodos = JSON.parse(xhr.responseText);
        app.updateTodos(newTodos);
      }
    }

    // Initialize and send the request:
    xhr.open("GET", 'http://localhost:3000/todos/');
    xhr.send();

  }

  updateTodos(newTodos) {
    // Make setState accessible inside of setTimeout:
    const app = this;

    function updateState(){
      app.setState({
        todos: newTodos
      });
    }

    setTimeout(updateState, 1500);
  }

  render(){
    const { todos } = this.state;

    return (
      <div className="App" >
        <header className="App-header">
          {todos.map(function(todo){
            return (
              <Todo
                key={todo.id}
                text={todo.text}
              />
            );
          })}
        </header>
      </div>
    );
  }
}

export default App;
