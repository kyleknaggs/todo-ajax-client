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
    this.addTodo = this.addTodo.bind(this);
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

  addTodo(){
    // Make fetchTodos() available inside of .onload()
    const app = this;
    const xhr = new XMLHttpRequest();
    const data = JSON.stringify({
      text: "New todo"
    });

    xhr.onload = function () {
      // Once todo has been added get new list of todos
      if (this.status === 201) {
        app.fetchTodos();
      }
    }

    xhr.open("POST", 'http://localhost:3000/todos/');
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(data);
  }

  // Lifecycle methods:
  componentDidMount() {
    this.fetchTodos();
  }

  render(){
    const { addTodo, state: {todos} } = this;

    return (
      <Background>
        <TodoList addTodo={addTodo} todos={todos} />
      </Background>
    );
  }
}

export default App;
