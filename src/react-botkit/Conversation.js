/**
 * @fileoverview The <Conversation /> component renders and delegates the entire conversation thread.
 */
import React, { Component, PropTypes } from 'react';
import { Messages, ThreadSettings } from './types.js';
import { getReactBotKitCSSClasses } from './utils.js';
import Bubble from './Bubble.js';
import './react-botkit.css';

const typingIndicatorComponent = <div className="typing_wrapper">
                <div className="typing_dot"></div>
                <div className="typing_dot"></div>
                <div className="typing_dot"></div>
            </div>;

class Conversation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  static propTypes = {
    thread: PropTypes.shape({
      authors: PropTypes.object.isRequired,
      messages: Messages.isRequired,
      settings: ThreadSettings.isRequired,
    }),
  }

  componentDidMount() {
    const { thread } = this.props;
    this.addToStack(thread.messages, thread.settings.simulateChat);
  }

  render() {
    const { authors, settings, messages: messagesSource } = this.props.thread;
    const { messages } = this.state;
    const { main, bubble } = getReactBotKitCSSClasses(settings.skin);
    const displayTypingIndicator = messages.length < messagesSource.length;
    const messageTypingIndex = messages.length;
    const typingMessage = Object.assign({}, messagesSource[messageTypingIndex], {contents: typingIndicatorComponent});
    return (
      <ul className={main}>
        {messages.map(msg =>  {
            return <Bubble key={msg.contents} cssClasses={bubble} message={msg} author={authors[msg.author]} />;
          })}
        {displayTypingIndicator ?
          <Bubble key={typingMessage.contents} cssClasses={bubble} message={typingMessage} author={authors[typingMessage.author]} />
          : null}
      </ul>
    );
  }

  /**
   * Given the previous stack (array of messages), takes 1 from array, pushes it to the conversation thread.
   * If the Array is still not empty, calls addToStack() again with the new Array, after a delay.
   * @param {Array} prevStack
   */
  addToStack(prevStack, simulateChat) {
    const messagesOnStack = prevStack.slice(0);
    const { messages } = this.state;
    const nextMessage = messagesOnStack.splice(0, 1)[0];
    messages.push(nextMessage);
    this.setState({messages});
    // if @param messagesOnStack is still a non-empty Array, addToStack(messagesOnStack).
    if (messagesOnStack.length > 0) {
      setTimeout(() => {
        this.addToStack(messagesOnStack, simulateChat);
      }, simulateChat ? messagesOnStack[0].delay : 0);
    }
  }
}

export default Conversation;
