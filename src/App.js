import React, { Component } from 'react';
import Todo from './components/Todo';
import './App.css';

class App extends Component {

  componentWillMount(){
    // Create a new request:
    var xhr = new XMLHttpRequest();

    // Add the callback to be fired onreadystatechange:
    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(xhr.responseText);
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
          <Todo/>
        </header>
      </div>
    );
  }
}

export default App;
