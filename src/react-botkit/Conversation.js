import React, { Component } from 'react';
import Bubble from './Bubble.js';
import './botkit.css';

class Conversation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    const { thread } = this.props;
    this.addToStack(thread.messages);
  }

  render() {
    const { authors } = this.props.thread;
    const { messages } = this.state;

    return (
      <ul className="conversation-list">
        {
          messages.map(msg =>  {
            return <Bubble key={msg.contents} message={msg} author={authors[msg.author]} />;
          })
        }
      </ul>
    );
  }

  addToStack(prevStack) {
    const items = prevStack.slice(0);
    const { messages } = this.state;
    const item = items.splice(0, 1)[0];
    messages.push(item);
    this.setState({messages});
    if (items.length > 0) {
      setTimeout(() => {
        this.addToStack(items);
      }, items[0].delay);
    }
  }
}

export default Conversation;
