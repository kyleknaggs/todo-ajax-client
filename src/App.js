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

  componentDidMount(){
    // Make updateTodo accessible inside of onload
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

  // Update the application state with the list of fetched todos.
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
