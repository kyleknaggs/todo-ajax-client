import React, { Component } from 'react';
import Background from './components/Background';
import TodoList from './components/TodoList';

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

  // Get the list of todos from the server.
  fetchTodos(){
    // Make loadTodos accessible inside of onload
    const app = this;
    var xhr = new XMLHttpRequest();

    xhr.onload = function () {
      if (this.status === 200) {
        const todos = JSON.parse(xhr.responseText);
        app.loadTodos(todos);
      }
    }

    xhr.open("GET", 'http://localhost:3000/todos/');
    xhr.send();
  }

  // Update the application state with the most recent list of todos.
  loadTodos(todos) {
    // Make setState accessible inside of setTimeout:
    const app = this;

    function updateState(){
      app.setState({
        todos: todos
      });
    }

    // Prevent loading screen from disappearing too fast.
    setTimeout(updateState, 1000);
  }

  addTodos(){
    // Add todo to list
    // Get new list of todos
    // Load the new list of todos into the application
  }

  // Lifecycle methods:
  componentDidMount() {
    this.fetchTodos();
  }

  render(){
    const { todos } = this.state;

    return (
      <Background>
        <TodoList todos={todos} />
      </Background>
    );
  }
}

export default App;
