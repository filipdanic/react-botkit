import React, { Component } from 'react';
import logo from './logo.svg';
import Conversation from './react-botkit/Conversation.js';
import sampleThread from './data01.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React BotKit</h2>
        </div>
        <div className="App-converstion-wrapper">
          <Conversation thread={sampleThread} />
        </div>
      </div>
    );
  }
}

export default App;
