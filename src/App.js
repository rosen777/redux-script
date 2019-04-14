import React, { Component } from 'react';
import logo from './logo.svg';
import Person from './components/Person'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <Person />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
