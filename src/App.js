import React, { Component } from 'react';
import logo from './logo.svg';
import Conversation from './react-botkit/Conversation.js';
import data from './demo-data/index.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDemo: 'INTRO_PITCH',
    };
  }

  render() {
    const { selectedDemo } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React BotKit</h2>
          <p><em>A React.js lib for creating chatbot presentations, demos, and prototypes.</em></p>
          <div className="App-nav">
            <button className="App-nav-button" onClick={this.handleClick.bind(this, 'INTRO_PITCH')}>🤖 General Example</button>
            <button className="App-nav-button" onClick={this.handleClick.bind(this, 'GIFS')}>🛠 Custom Components & GIFs!</button>
            <button className="App-nav-button" onClick={this.handleClick.bind(this, 'REAL_WORLD_1')}>🌎 Real World Example</button>
            <br/>
            <button className="App-nav-button" onClick={this.handleClick.bind(this, 'GROUP')}>👫 Massive Group</button>
            <button className="App-nav-button" onClick={this.handleClick.bind(this, 'ARCHIVE')}>📚 Archive Mode</button>
            <button className="App-nav-button" onClick={this.handleClick.bind(this, 'HELLO_WORLD')}>👋 Hello, World!</button>
          </div>
        </div>
        <div className="App-converstion-wrapper">
          <Conversation thread={data[selectedDemo]} />
        </div>
      </div>
    );
  }

  handleClick(selectedDemo) {
    this.setState({ selectedDemo });
  }
}

export default App;
