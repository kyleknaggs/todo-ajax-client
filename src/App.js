import React, { Component } from 'react';
import Todo from './components/Todo';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          text: "Loading..."
        }
      ]
    };

  }

  componentDidMount(){
    // Make updateTodo accessible inside of onload
    const app = this;

    // Create a new request:
    var xhr = new XMLHttpRequest();

    // Callback to be fired after the request is successfull
    xhr.onload = function () {
      if (this.status === 200) {
        // Convert JSON returned by the server into JavaScript:
        const newTodo = JSON.parse(xhr.responseText);
        app.updateTodo(newTodo);
      }
    }

    // Initialize and send the request:
    xhr.open("GET", 'http://localhost:3000/todos/1');
    xhr.send();

  }

  updateTodo(newTodo) {
    // Make setState accessible inside of setTimeout:
    const app = this;

    function updateState(){
      app.setState({
        todos: [newTodo]
      });
    }

    setTimeout(updateState, 1500);
  }

  render(){
    const text = this.state.todos[0].text;

    return (
      <div className="App" >
        <header className="App-header">
          <Todo
            text= {text}
          />
        </header>
      </div>
    );
  }
}

export default App;
