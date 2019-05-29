import React, { Component } from 'react';
import logo from './logo.svg';
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
          <img src={logo} className="App-logo" alt="logo" />
          <p>My first edit to my Create React App boiler plate file.</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

export default App;
