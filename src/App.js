import React, { Component } from 'react';
import Todo from './components/Todo';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentWillMount(){
    // Create a new request:
    var xhr = new XMLHttpRequest();

    // Add the callback to be fired onreadystatechange:
    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        // Conver JSON returned by the server into JavaScript:
        const todo = JSON.parse(xhr.responseText);
        console.log(todo);
      }
    }

    // Initialize the request:
    xhr.open("GET", 'https://jsonplaceholder.typicode.com/todos/1');
    // Send the request:
    xhr.send();

  }

  render(){
    return (
      <div className="App" >
        <header className="App-header">
          <Todo
            text= "This is my first todo. It has many lines so that I can see how it looks just in case I go over."
          />
        </header>
      </div>
    );
  }
}

export default App;
